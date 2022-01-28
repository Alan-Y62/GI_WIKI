const { Router } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Character = require("../models/characters");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/characters", async (req, res) => {
  const list = await Character.find().sort({ name: 1 });
  res.render("characters", { list: list });
});

router.get("/characters/:name", async (req, res) => {
  let character = "";
  let name = req.params.name;
  if (name.includes("Lumine") || name.includes("Aether")) {
    const element = name.slice(7, -1);
    name = name.slice(0, 6);
    character = await Character.find({ name: name, element: element });
  } else {
    character = await Character.find({ name: name });
  }
  console.log(character);
  res.render("character", { character: character });
});

router.get("/privacy", (req, res) => {
  res.render("privacy");
});

module.exports = router;
