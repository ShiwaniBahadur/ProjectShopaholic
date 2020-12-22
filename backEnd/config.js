import dotenv from 'dotenv';

dotenv.config();

export default {
  // PORT: process.env.PORT || 7000,
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};