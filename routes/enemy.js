const express = require("express");
const router = express.Router();
const Common = require("../models/common_enemy");
const Elite = require("../models/elite_enemy");
const World = require("../models/world_boss");
const Weekly = require("../models/weekly_boss")

router.get("/", (req, res) => {
    res.render("./enemies/enemies")
});

router.get('/weekly_boss', async (req, res) => {
    const week = await Weekly.find();
    res.render("./enemies/weeklies", {week:week})
});

router.get('/weekly_boss/:name', async (req, res) => {
    const name = req.params.name;
    const weekly = await Weekly.find({name:name});
    res.render("./enemies/single_enemy/week", {weekly: weekly[0]});
});

router.get('/world_boss', async (req, res) => {
    const world = await World.find();
    res.render("./enemies/worlds", { world: world})
});

router.get('/world_boss/:name', async (req, res) => {
    const name = req.params.name;
    const world = await World.find({name:name});
    res.render("./enemies/single_enemy/world", {world: world[0]});
});

router.get('/elite_enemies', async (req, res) => {
    const elite = await Elite.find();
    res.render("./enemies/elites", {elite: elite})
});

router.get('/elite_enemies/:name', async (req, res) => {
    const name = req.params.name;
    const elite = await Elite.find({name:name});
    res.render("./enemies/single_enemy/elite", {elite: elite[0]});
});

router.get('/common_enemies', async (req, res) => {
    const common = await Common.find();
    res.render("./enemies/commons", { common: common })
});

router.get('/common_enemies/:name', async (req, res) => {
    const name = req.params.name;
    const common = await Common.find({name:name});
    res.render("./enemies/single_enemy/common", {common: common[0]});
});

module.exports = router;