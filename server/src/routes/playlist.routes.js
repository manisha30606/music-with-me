import express from "express";
import auth from "../middleware/auth.middleware.js";
import {
  createPlaylist,
  addSongToPlaylist,
  getMyPlaylists,
} from "../controllers/playlist.controller.js";

const router = express.Router();

router.post("/", auth, createPlaylist);
router.post("/song", auth, addSongToPlaylist);
router.get("/", auth, getMyPlaylists);

export default router;
