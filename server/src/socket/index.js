// src/socket/index.js

import roomSocket from "./room.socket.js";
import commentSocket from "./comment.socket.js";

const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("🔌 Socket connected:", socket.id);

    roomSocket(io, socket);
    commentSocket(io, socket);

    socket.on("disconnect", () => {
      console.log("❌ Socket disconnected:", socket.id);
    });
  });
};

export default socketHandler;
