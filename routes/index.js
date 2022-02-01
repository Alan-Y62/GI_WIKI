const { Router } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Character = require("../models/characters");
const Weapon = require("../models/weapons");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/characters", async (req, res) => {
  const list = await Character.find().sort({ name: 1 });
  res.render("characters", { list: list });
});

router.get("/characters/:name", async (req, res) => {
  let character = "";
  let name = req.params.name;
  if (name.includes("Lumine") || name.includes("Aether")) {
    const element = name.slice(7, -1);
    name = name.slice(0, 6);
    character = await Character.find({ name: name, element: element });
  } else {
    character = await Character.find({ name: name });
  }
  console.log(character[0].talents.skill.description);
  res.render("character", { character: character });
});

router.get("/weapons", async (req, res) => {
  const weaponList = await Weapon.find().sort({ type: 1, rarity: 1, name: 1 });
  res.render("weapons", { weapons: weaponList });
});

router.get("/privacy", (req, res) => {
  res.render("privacy");
});

router.get("/temp", (req, res) => {
  res.render("temp");
});

router.post("/temp", (req, res) => {
  const {
    name,
    rarity,
    base_atk,
    max_atk,
    sub_stat,
    base_sub,
    max_sub,
    asc,
    ral1,
    ral2,
    ral3,
    ral4,
    ral5,
    lore,
  } = req.body;

  const asc_mats = [];
  asc_mats.push(...asc.split(","));

  const ref_lvls = [];
  if (ral1.length > 0) {
    ref_lvls.push(ral1, ral2, ral3, ral4, ral5);
  }

  const weapon = new Weapon({
    name: name,
    rarity: rarity,
    base_atk: base_atk,
    maxed_atk: max_atk,
    sub_stat: sub_stat,
    sub_base_value: base_sub,
    sub_max_value: max_sub,
    ascension_mats: asc_mats,
    refinement_abilities: ref_lvls,
    lore: lore,
  });
  weapon.save();
  console.log(weapon);
  res.redirect("/temp");
});

module.exports = router;
