const { Router } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Weapon = require("../models/weapons");
const Spiral = require("../models/spiral")
const Artifact = require("../models/artifact")

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/weapons", async (req, res) => {
  const weaponList = await Weapon.find().sort({ type: 1, rarity: 1, name: 1 });
  res.render("./weapons/weapons", { weapons: weaponList });
});

router.get("/weapons/:weapon_name", async (req, res) => {
  let wname = req.params.weapon_name.replace("_", " ");
  let weapon = await Weapon.findOne({ name: wname });
  console.log(weapon);
  res.render("./weapons/weapon", { weapon: weapon });
});

router.get("/privacy", (req, res) => {
  res.render("privacy");
});

router.get("/design" , (req,res) => {
  res.render("design")
})

router.get("/spiral" , async (req, res) => {
  let spiral = await Spiral.find();
  res.render("spiral", {spiral: spiral})
})

router.get("/artifacts" , async(req,res) => {
  const artifacts = await Artifact.find();
  res.render("artifacts", {artifacts: artifacts})
})

module.exports = router;
