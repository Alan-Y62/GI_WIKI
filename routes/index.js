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

router.get("/characters/:name", (req, res) => {
  res.render("character");
});

module.exports = router;
