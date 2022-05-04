import { connect, ConnectOptions, disconnect } from "mongoose";
import { MONGO_URL } from "../config/index";

export const initMongoDB = async () => {
  try {
    await connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("conected to mongoDB");
  } catch (error) {
    console.error(error);
  }
};

export const closeMongoConnection = async () => {
  await disconnect();
};
