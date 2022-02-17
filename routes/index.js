const { Router } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Weapon = require("../models/weapons");

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

module.exports = router;
