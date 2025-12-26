// src/controllers/song.controller.js

import Room from "../models/Room.js";

/**
 * Add song to room queue
 */
export const addSongToRoom = async (req, res) => {
  try {
    const { roomCode, song } = req.body;

    const room = await Room.findOne({ roomCode });
    if (!room) return res.status(404).json({ message: "Room not found" });

    room.queue.push(song);

    // Auto play if nothing is playing
    if (!room.currentSong) {
      room.currentSong = song;
    }

    await room.save();
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Play next song in queue
 */
export const playNextSong = async (req, res) => {
  try {
    const room = await Room.findOne({ roomCode: req.params.code });
    if (!room) return res.status(404).json({ message: "Room not found" });

    room.currentSong = room.queue.shift() || null;
    await room.save();

    res.status(200).json(room.currentSong);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
