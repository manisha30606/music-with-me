// src/controllers/auth.controller.js

import { registerUser, loginUser } from "../services/auth.service.js";

/**
 * Signup controller
 */
export const signup = async (req, res) => {
  try {
    const token = await registerUser(req.body);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Login controller
 */
export const login = async (req, res) => {
  try {
    const token = await loginUser(req.body);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
