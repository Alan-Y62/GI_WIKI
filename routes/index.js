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
  const b = req.url.split("/")[2].replace("%20", " ");
  const character = await Character.find({ name: b });
  console.log(character);
  res.render("character", { character: character });
});

module.exports = router;
