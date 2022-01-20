const { Router } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Character = require("../models/characters");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/characters", (req, res) => {
  res.render("character");
});

module.exports = router;
