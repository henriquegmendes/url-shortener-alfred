import mongoose from 'mongoose';
import { shortId } from '../utils';

const { Schema } = mongoose;

const UrlSchema = new Schema({
  _id: { type: String, default: shortId.generateId },
  redirectUrl: { type: String, required: true },
  expirationDateMs: { type: Number, required: true },
});

const Urls = mongoose.model('Url', UrlSchema);

module.exports = Urls;
