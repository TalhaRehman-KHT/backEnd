import mongoose from "mongoose";

const connection = async (DataBaseUrl) => {
  try {
    await mongoose.connect(DataBaseUrl).then(() => {
      console.log(`DataBase connected`);
    });
  } catch (error) {
    console.log(`DataBase Connection Error ${error}`);
  }
};

export default connection;
