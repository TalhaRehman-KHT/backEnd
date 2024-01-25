//
import RoomModel from "../schema/roomID.js";
import { Server } from "socket.io";

// userAssignToRoom.js

export const userAssignToRoom = async (roomId, userId, io) => {
  try {

    // Emit a 'userAssigned' event to the specific room
    io.to(roomId).emit("userAssigned", { roomId, userId });
    // 
  } catch (error) {
    console.error(error);
  }
};
