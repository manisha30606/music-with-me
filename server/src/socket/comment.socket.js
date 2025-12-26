// src/socket/comment.socket.js

import { saveComment } from "../services/comment.service.js";

/**
 * Handles real-time song comments
 */
const commentSocket = (io, socket) => {
  socket.on("comment:add", async (data) => {
    const comment = await saveComment({
      roomCode: data.roomCode,
      songYoutubeId: data.songYoutubeId,
      userId: data.userId,
      message: data.message,
      timestamp: data.timestamp,
    });

    // Broadcast to everyone in room
    io.to(data.roomCode).emit("comment:new", comment);
  });
};

export default commentSocket;
