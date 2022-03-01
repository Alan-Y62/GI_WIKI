const { Router } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Weapon = require("../models/weapons");
const Spiral = require("../models/spiral");
const Artifact = require("../models/artifact");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/weapons", async (req, res) => {
  res.render("./weapons/weapons");
});

router.get("/weapons/:weapon_type", async (req, res) => {
  let type =
    req.params.weapon_type[0].toUpperCase() +
    req.params.weapon_type.slice(1, -1);
  let list = await Weapon.find({ type: type });
  console.log(list);
  res.render("./weapons/individual", { list: list });
});

router.get("/weapons/:weapon_type/:weapon_name", async (req, res) => {
  let wname = req.params.weapon_name.replace("_", " ");
  let weapon = await Weapon.findOne({ name: wname });
  console.log(weapon);
  res.render("./weapons/weapon", { weapon: weapon });
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
