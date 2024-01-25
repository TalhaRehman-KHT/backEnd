

import RoomModel from "../schema/roomID.js";

const modrator = async (req, res) => {
  try {
    const data = req.body;

    if (data.role === "KING") {
      const roomId = data.roomId;

      const roomData = await RoomModel.findOne({ roomId });

      if (roomData) {
        res.json({ success: true, message: "Moderator", data: roomData });
      } else {
        res.json({ success: false, message: "Room not found" });
      }
    } else {
      res.json({ success: false, message: "Not a moderator" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export default modrator;
