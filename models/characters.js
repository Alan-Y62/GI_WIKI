const mongoose = require("mongoose");

const CharSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  star: {
    type: Number,
    required: true,
  },
  weapon: {
    type: String,
    required: true,
  },
  constellation: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  element: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
});

const Character = mongoose.model("Character", CharSchema);

module.exports = Character;
