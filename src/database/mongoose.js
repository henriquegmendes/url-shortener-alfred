import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

module.exports = mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
// eslint-disable-next-line no-console
).then(() => console.log('Connected in database'));
