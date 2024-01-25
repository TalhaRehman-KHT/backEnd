import express from "express";
import UserModle from "../schema/UserSchema.js";
import PlayerModel from "../schema/playerSchema.js";
import RoomModel from "../schema/roomID.js";
//import { v4 as uuidv4 } from "uuid";
const app = express();

export const homeController = (req, res) => {
  res.send("1st Page where name entered  ");
};

// This Function Create RoomID (5)
const generateRandomString = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
};
// Generate Room ID
export const generateRoomIdController = (req, res) => {
  try {
    const roomId = generateRandomString(5);
    res.json({ roomId });
  } catch (error) {
    res.status(500).send("Error generating room ID");
  }
};

//  Create UserName
export const createUserController = async (req, res) => {
  try {
    const { username } = req.body;
    console.log(username);
    const user = new UserModle({ username });
    await user.save();
    res.json({ success: true, message: "User created successfully" });
  } catch (error) {
    res.status(500).send(`Error creating user ${error}`);
  }
};

//  CREATE ROOM:ID
export const createRoomController = async (req, res) => {
  try {
    // console.log("testing ?");
    const roomId = generateRandomString(5); //short 5-character roomId
    // console.log(`${roomId}`);
    const host = req.body.userId;
    const room = new RoomModel({ roomId, host, participants: {} });
    await room.save();
    res.json({ success: true, message: `${roomId}` });
  } catch (error) {
    res.status(500).send("Error creating room");
  }
};
