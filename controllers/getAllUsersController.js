// controllers/getAllUsersController.js

import RoomModel from "../schema/roomID.js";
import { assignRolesController } from "./userRoleController.js";

export const getAllUsersController = async (req, res) => {

  try {
    const { roomId } = req.params;

    const room = await RoomModel.findOne({ roomId });
    if (!room) {
      return res
        .status(404)
        .json({ success: false, message: "Room not found" });
    }
 
    const host = room.host;
    const participants = room.participants;
    const allUsers = [host, ...participants];

     console.log(`All Users = ${allUsers}`);

    
    const assignedRolesResult = await assignRolesController(allUsers);

    console.log("Assigned Roles Result:", assignedRolesResult);

    // Now, handle the final response based on the result from assignRolesController
    if (assignedRolesResult.success) {
      res.json(assignedRolesResult);
    } else {
      // res.json(assignedRolesResult);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting all users in room");
  }
};
