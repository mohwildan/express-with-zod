import mongoose from "mongoose";
import config from "config";
import log from "./logger";

const connect = async () => {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    log.info("Connected to db");
  } catch (error) {
    log.error("disconnect to db", error);
    process.exit(1);
  }
};

export default connect;
