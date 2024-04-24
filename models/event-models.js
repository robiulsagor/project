import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  details: {
    required: true,
    type: String,
  },
  location: {
    required: true,
    type: String,
  },
  imageUrl: {
    required: true,
    type: String,
  },
  interested_ids: {
    type: Array,
  },
  going_ids: {
    type: Array,
  },
  swags: {
    type: Array,
  },
});

export const eventModel =
  mongoose.models.events ?? mongoose.model("events", schema);
