import { findRoomByCode, deleteRoomByCode } from "../services/room.service.js";

const roomUsers = new Map(); // roomCode → Set(socket.id)

const roomSocket = (io, socket) => {
  socket.on("room:join", async ({ roomCode }) => {
    socket.join(roomCode);

    if (!roomUsers.has(roomCode)) {
      roomUsers.set(roomCode, new Set());
    }

    roomUsers.get(roomCode).add(socket.id);

    const room = await findRoomByCode(roomCode);
    if (room) socket.emit("room:sync", room);

    io.to(roomCode).emit("room:users", {
      count: roomUsers.get(roomCode).size,
    });
  });

  socket.on("room:leave", async ({ roomCode }) => {
    socket.leave(roomCode);

    if (!roomUsers.has(roomCode)) return;

    roomUsers.get(roomCode).delete(socket.id);

    if (roomUsers.get(roomCode).size === 0) {
      await deleteRoomByCode(roomCode);
      roomUsers.delete(roomCode);
      return;
    }

    io.to(roomCode).emit("room:users", {
      count: roomUsers.get(roomCode).size,
    });
  });

  socket.on("room:sync-time", ({ roomCode, time }) => {
    socket.to(roomCode).emit("room:update-time", time);
  });
};

export default roomSocket;
