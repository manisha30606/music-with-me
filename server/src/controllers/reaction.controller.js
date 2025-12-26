// src/controllers/reaction.controller.js

/**
 * Reactions are socket-driven,
 * not REST-driven.
 * This controller is intentionally minimal.
 */

export const reactToSong = (socket, io) => {
  socket.on("reaction:add", (data) => {
    io.to(data.roomCode).emit("reaction:receive", {
      user: data.user,
      emoji: data.emoji,
      timestamp: data.timestamp,
    });
  });
};
