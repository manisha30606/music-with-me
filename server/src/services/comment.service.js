// src/services/comment.service.js

import Comment from "../models/Comment.js";

/**
 * Save a new comment to database
 */
export const saveComment = async ({
  roomCode,
  songYoutubeId,
  userId,
  message,
  timestamp,
}) => {
  return Comment.create({
    roomCode,
    songYoutubeId,
    user: userId,
    message,
    timestamp,
  });
};

/**
 * Get comments for a song in a room
 */
export const getCommentsForSong = async (roomCode, songYoutubeId) => {
  return Comment.find({ roomCode, songYoutubeId })
    .populate("user", "name avatar")
    .sort({ createdAt: 1 });
};
