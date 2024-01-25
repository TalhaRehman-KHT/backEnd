import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
  },
  host: {
    type: String,
    required: true,
  },
  participants: {
    type: Array,
  }
});

const RoomModel = mongoose.model("Room", roomSchema);

export default RoomModel;
