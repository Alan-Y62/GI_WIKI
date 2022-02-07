const express = require("express");
const router = express.Router();
const Character = require("../models/characters");

router.get("/", async (req, res) => {
  const list = await Character.find().sort({ name: 1 });
  res.render("./characters/characters", { list: list });
});

router.get("/:name", async (req, res) => {
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
  res.render("./characters/character", { character: character });
});

module.exports = router;
