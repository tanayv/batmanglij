const express = require("express");
const router = express.Router();

let state = {
    players: [

    ],
    cards: {
        black: {

        },
        white: [{

        }]
    }
}

module.exports = {
    router
}