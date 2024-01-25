import express from "express";
import routes from "./routes/gameRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import connection from "./db/connectionDataBase.js";


const app = express();
const PORT = 3002;
const DataBaseUrl = "mongodb://localhost:27017/Project";

// socket
const server = http.createServer(app);
// Backend code
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000/lobby", 
    methods: ["GET", "POST"],
  },
  path: "/lobby/socket.io",
});

//
// MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());


// 
// Socket connection handling
io.on("connection", (socket) => {
  console.log(`A user connected = ${socket.id}`);
  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});


connection(DataBaseUrl);

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});

export { io };
