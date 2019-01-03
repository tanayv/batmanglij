const express = require("express");
const router = express.Router();
const pack = require("./pack.json");

/** @todo: Randomize card draws while keeping track of already used cards */

router.get("/draw/white/full", (req, res) => {

    let deck = [];
    for (let card of pack.white) {
        if (deck.length < 6) {
            deck.push(card);
        }
    }

    res.json(deck);
})

const drawBlackCard = () => {
    return pack.black[0];
}

module.exports = {
    router,
    drawBlackCard
};
