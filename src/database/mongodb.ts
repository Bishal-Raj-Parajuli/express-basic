import mongoose from "mongoose";
import "dotenv/config";

if (!process.env.DB_URL) {
  throw new Error("DB_URL is not defined");
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL!);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1);
  }
};

export default connectToDatabase;
