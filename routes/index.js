const { Router } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Character = require("../models/characters");

router.get("/", (req, res) => {
  res.render("../views/home");
});

router.get("/jsonspew", async (req, res) => {
  const charList = await Character.find();
  res.write(`<pre>${JSON.stringify(charList, null, 2)}</pre>`);
  res.end();
});

module.exports = router;
