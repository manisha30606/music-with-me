// src/models/Song.js

import mongoose from "mongoose";

/**
 * Song Sub-Schema
 * Used inside playlists and room queues
 */
const songSchema = new mongoose.Schema(
  {
    youtubeId: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { _id: false } // Prevent Mongo from creating extra _id
);

export default songSchema;
