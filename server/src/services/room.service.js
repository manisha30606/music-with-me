import Room from "../models/Room.js";
import { v4 as uuidv4 } from "uuid";

/**
 * Create a new room
 */
export const createRoom = async (userId) => {
  return Room.create({
    roomCode: uuidv4().slice(0, 6),
    createdBy: userId,
    currentSong: null,
    queue: [],
  });
};

/**
 * Find room by code
 */
export const findRoomByCode = async (roomCode) => {
  return Room.findOne({ roomCode });
};

/**
 * Delete room when empty
 */
export const deleteRoomByCode = async (roomCode) => {
  await Room.findOneAndDelete({ roomCode });
};
