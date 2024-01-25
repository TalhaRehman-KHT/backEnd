//
import RoomModel from "../schema/roomID.js";
import { userAssignToRoom } from "./userAssignToRoomController.js";
import { io } from "../server.js";

//

const roomUsers = {};
// Create a function to add a user to the roomUsers array
const addUserToRoom = (roomId, userId, socketId) => {
  if (!roomUsers[roomId]) {
    roomUsers[roomId] = {};
  }

  roomUsers[roomId][userId] = socketId;
};

// joinRoomController.js
export const joinRoomController = async (req, res) => {
  try {
    const { roomId, userId } = req.body;
    // Check if the room exists
    const room = await RoomModel.findOne({ roomId });
    if (!room) {
      return res
        .status(404)
        .json({ success: false, message: "Room not found" });
    }

    const socketId = Math.random().toString(36).substring(7);
    //

    // Add the user to the roomUsers array
    addUserToRoom(roomId, userId, socketId);

    //
    const isParticipant = room.participants.includes(userId.username);
    if (!isParticipant) {
      // Append the user to the participants array
      await RoomModel.updateOne(
        { roomId },
        { $push: { participants: userId } }
      );
    }
    //
    await userAssignToRoom(roomId, userId, io);

    res.json({
      success: true,
      message: `Joined room ${roomId}`,
      roomUsers: roomUsers,
    });
    //
    console.log(
      `socketId = ${socketId}, roomUsers = ${JSON.stringify(
        roomUsers,
        null,
        2
      )}`
    );
  } catch (error) {
    res.status(500).send("Error joining room");
  }
};
