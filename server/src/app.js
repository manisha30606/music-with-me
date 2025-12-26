// src/app.js

import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import roomRoutes from "./routes/room.routes.js";
import playlistRoutes from "./routes/playlist.routes.js";
import commentRoutes from "./routes/comment.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/playlists", playlistRoutes);
app.use("/api/comments", commentRoutes);

// Health check
app.get("/", (_, res) => {
  res.send("Music With Me API running 🎧");
});

export default app;
