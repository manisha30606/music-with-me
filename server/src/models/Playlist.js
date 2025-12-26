// src/models/Playlist.js

import mongoose from "mongoose";
import songSchema from "./Song.js";

/**
 * Playlist Schema
 * Personal playlists owned by users
 */
const playlistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    songs: [songSchema],
  },
  { timestamps: true }
);

const Playlist = mongoose.model("Playlist", playlistSchema);
export default Playlist;
