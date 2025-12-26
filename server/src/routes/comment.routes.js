import express from "express";
import auth from "../middleware/auth.middleware.js";
import {
  createComment,
  getSongComments,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/", auth, createComment);
router.get("/:roomCode/:songYoutubeId", auth, getSongComments);

export default router;
