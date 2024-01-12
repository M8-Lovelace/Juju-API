import { Schema, model } from "mongoose";

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  // Status: true = available, false = not available
  status: {
    type: Boolean,
    default: true,
  },
});

export default model("Book", BookSchema);
