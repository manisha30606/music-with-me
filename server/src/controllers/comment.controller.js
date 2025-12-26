// src/controllers/comment.controller.js

import {
  saveComment,
  getCommentsForSong,
} from "../services/comment.service.js";

/**
 * Save comment (REST fallback)
 */
export const createComment = async (req, res) => {
  try {
    const comment = await saveComment({
      roomCode: req.body.roomCode,
      songYoutubeId: req.body.songYoutubeId,
      userId: req.user._id,
      message: req.body.message,
      timestamp: req.body.timestamp,
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Fetch comments for current song
 */
export const getSongComments = async (req, res) => {
  try {
    const { roomCode, songYoutubeId } = req.params;

    const comments = await getCommentsForSong(roomCode, songYoutubeId);

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
