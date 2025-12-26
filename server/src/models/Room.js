// src/models/Room.js

import mongoose from "mongoose";
import songSchema from "./Song.js";

/**
 * Room Schema
 * Represents a collaborative music room
 * Room is destroyed when user count becomes zero
 */
const roomSchema = new mongoose.Schema(
  {
    roomCode: {
      type: String,
      required: true,
      unique: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    currentSong: {
      type: songSchema,
      default: null,
    },

    queue: {
      type: [songSchema],
      default: [],
    },
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);
export default Room;
