import { createRoom, findRoomByCode } from "../services/room.service.js";

/**
 * POST /api/rooms/create
 */
export const createRoomController = async (req, res) => {
  try {
    const room = await createRoom(req.user._id);
    res.status(201).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * POST /api/rooms/join
 */
export const joinRoomController = async (req, res) => {
  try {
    const { roomCode } = req.body;

    const room = await findRoomByCode(roomCode);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * GET /api/rooms/:code
 */
export const getRoomState = async (req, res) => {
  try {
    const room = await findRoomByCode(req.params.code);

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
