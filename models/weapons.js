const mongoose = require("mongoose");

const WeapSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    rarity: {
      type: Number,
      required: true,
    },
    base_atk: {
      type: Number,
      required: true,
    },
    maxed_atk: {
      type: Number,
      required: true,
    },
    sub_stat: {
      type: String,
      required: true,
    },
    sub_base_value: {
      type: Number,
      required: true,
    },
    sub_max_value: {
      type: Number,
      required: true,
    },
    ascension_mats: {
      type: Array,
      required: true,
    },
    refinement_abilities: {
      type: Array,
    },
    lore: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Weapon = mongoose.model("Weapon", WeapSchema);

module.exports = Weapon;
