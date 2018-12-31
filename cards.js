const express = require("express");
const router = express.Router();
const pack = require("./pack.json");

router.get("/draw/white/full", (req, res) => {
    res.json(pack.white);
})

module.exports = router;
