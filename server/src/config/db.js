// src/config/db.js

import mongoose from "mongoose";
import env from "./env.js";

/**
 * Connects the application to MongoDB
 * This function should be called once when the server starts
 */
const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGO_URI);

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Stop server if DB fails
  }
};

export default connectDB;
