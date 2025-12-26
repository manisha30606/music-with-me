// src/models/Comment.js

import mongoose from "mongoose";

/**
 * Comment Schema
 * Used for song-line / timestamp based comments
 */
const commentSchema = new mongoose.Schema(
  {
    roomCode: {
      type: String,
      required: true,
      index: true,
    },

    songYoutubeId: {
      type: String,
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    timestamp: {
      type: Number, // seconds into the song
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
