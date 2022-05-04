import { config } from "dotenv";

config();

export const env = process.env.NODE_ENV;

export const PORT = process.env.PORT || 5300;

const getMongoUrl = (env = "dev") => {
  switch (env) {
    case "prod":
      return process.env.MONGO_URL;
    default:
      return process.env.MONGO_URL_TEST;
  }
};

export const MONGO_URL = getMongoUrl(env) || "";
