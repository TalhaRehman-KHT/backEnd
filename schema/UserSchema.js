import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: true,
    // unique: true, 
  },
});

const UserModle = mongoose.model("users", userSchema);
export default UserModle;
