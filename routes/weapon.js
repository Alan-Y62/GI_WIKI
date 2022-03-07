const express = require("express");
const router = express.Router();
const Weapon = require("../models/weapons");

router.get("/", async (req, res) => {
  res.render("./weapons/weapons");
});

router.get("/:weapon_type", async (req, res) => {
  let type =
    req.params.weapon_type[0].toUpperCase() +
    req.params.weapon_type.slice(1, -1);
  let list = await Weapon.find({ type: type });
  res.render("./weapons/individual", { list: list });
});

router.get("/:weapon_type/:weapon_name", async (req, res) => {
  let wname = req.params.weapon_name.replace("_", " ");
  let weapon = await Weapon.findOne({ name: wname });
  res.render("./weapons/weapon", { weapon: weapon });
});

module.exports = router;
