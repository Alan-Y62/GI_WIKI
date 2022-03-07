const { Router } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Spiral = require("../models/spiral");
const Artifact = require("../models/artifact");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/privacy", (req, res) => {
  res.render("privacy");
});

router.get("/design", (req, res) => {
  res.render("design");
});

router.get("/spiral", async (req, res) => {
  let spiral = await Spiral.find();
  res.render("spiral", { spiral: spiral });
});

router.get("/artifacts", async (req, res) => {
  const artifacts = await Artifact.find();
  res.render("artifacts", { artifacts: artifacts });
});

module.exports = router;
