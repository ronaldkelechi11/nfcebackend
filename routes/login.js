const express = require('express');
const db = require("../providers/db")
const router = express.Router();

// Middleware
router.use(express.json())
router.use(express.urlencoded())

// Restful Methods
router.get("/", (req, res) => {
    res.send("Your are in Login")
});

router.post("/", (req, res) => {

});

// Export

module.exports = router