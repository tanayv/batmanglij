const express = require("express");
const router = express.Router();
const pack = require("./pack.json");

/** @todo: Randomize card draws while keeping track of already used cards */

let whiteCardBank = pack.white;
let blackCardBank = pack.black;

router.get("/draw/white/full", (req, res) => {
    var newItems = [];
    for(var i = 0; i < 6; i++) {
        var idx = Math.floor(Math.random() * whiteCardBank.length);
        newItems.push(whiteCardBank[idx]);
        whiteCardBank.splice(idx, 1);
    }
    if (whiteCardBank.length == 0)
        whiteCardBank = pack.white;
    res.json(newItems);
})

router.get("/draw/white/single", (req, res) => {
    var newItems = [];
    for(var i = 0; i < 1; i++) {
        var idx = Math.floor(Math.random() * whiteCardBank.length);
        newItems.push(whiteCardBank[idx]);
        whiteCardBank.splice(idx, 1);
    }
    if (whiteCardBank.length == 0)
        whiteCardBank = pack.white;
    res.json(newItems);
})

const drawBlackCard = () => {
    result = blackCardBank.pop();
    if (blackCardBank.length == 0)
        blackCardBank = pack.black;
    return result;
}

module.exports = {
    router,
    drawBlackCard
};
