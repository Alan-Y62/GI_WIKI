const { Router } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Character = require("../models/characters");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/characters", async (req, res) => {
  const list = await Character.find();
  res.render("character", { list: list });
});

module.exports = router;
