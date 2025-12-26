// src/config/env.js

import dotenv from "dotenv";

// Load .env variables into process.env
dotenv.config();

const env = {
  PORT: process.env.PORT || 4000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};

export default env;
