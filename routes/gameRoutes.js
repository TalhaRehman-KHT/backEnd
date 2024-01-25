//
import express from "express";
import {
  homeController,
  createRoomController,
  generateRoomIdController,
  createUserController,
} from "../controllers/homeController.js";
import { assignRolesController } from "../controllers/userRoleController.js";
import { joinRoomController } from "../controllers/joinRoomController.js";
import { getAllUsersController } from "../controllers/getAllUsersController.js";
// import { checkModrator } from "../controllers/checkModratorController.js";
import modrator from "../controllers/modratorController.js";

const routes = express.Router();
//
routes.get("/", homeController);
routes.post("/createRoom", createRoomController);
routes.post("/createUser", createUserController);

// routes.get("/room/:roomId/users", getUsersInRoomController);
routes.get("/room/:roomId/allUsers", getAllUsersController);
//
//routes.get("/modrator", modrator);
//
// routes.get('/generateRoomId', generateRoomIdController);
routes.post("/joinRoom", joinRoomController);
routes.post("/room/assignRoles", assignRolesController);

//
routes.post("/checkRole", modrator);

export default routes;
