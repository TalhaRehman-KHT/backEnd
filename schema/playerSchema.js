// PlayerSchema.js
import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
  role: {
    type: String,
    required: true,
  },
  // Add other fields as needed
});

const PlayerModel = mongoose.model('Player', playerSchema);

export default PlayerModel;






