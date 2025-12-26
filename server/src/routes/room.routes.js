import express from "express";
import auth from "../middleware/auth.middleware.js";
import {
  createRoomController,
  joinRoomController,
  getRoomState,
} from "../controllers/room.controller.js";

const router = express.Router();

router.post("/create", auth, createRoomController);
router.post("/join", auth, joinRoomController);
router.get("/:code", auth, getRoomState);

export default router;
