// src/controllers/playlist.controller.js

import Playlist from "../models/Playlist.js";

/**
 * Create new playlist
 */
export const createPlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.create({
      name: req.body.name,
      owner: req.user._id,
      songs: [],
    });

    res.status(201).json(playlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Add song to playlist
 */
export const addSongToPlaylist = async (req, res) => {
  try {
    const { playlistId, song } = req.body;

    const playlist = await Playlist.findOne({
      _id: playlistId,
      owner: req.user._id,
    });

    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    playlist.songs.push(song);
    await playlist.save();

    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Get all playlists of user
 */
export const getMyPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find({ owner: req.user._id });
    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
