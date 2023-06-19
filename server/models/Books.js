const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    default: 2020,
  },
  copies: {
    type: Number,
    default: 15,
  },
  image: {
    type: String,
    required: true,
  },
});

const BookModel = mongoose.model("books", BookSchema);
module.exports = BookModel;
