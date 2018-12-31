const express = require("express");
const router = express.Router();
const pack = require("./pack.json");

/** @todo: Randomize card draws while keeping track of already used cards */

router.get("/draw/white/full", (req, res) => {
    res.json(pack.white);
})

const drawBlackCard = () => {
    return pack.black[0];
}

module.exports = {
    router,
    drawBlackCard
};
