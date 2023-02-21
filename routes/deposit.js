const express = require('express');
const db = require("../providers/db");
const router = express.Router();


// Middleware
router.use(express.json())
router.use(express.urlencoded())


// MAKE DEPOSIT TO PAYSTACK THEN GET CURRENT ACCOUNT BALANCE AND ADD TO AMOUNT DEPOSITED
router.get("/", (req, res) => {
    console.log("Deposit");
    res.send("hey")
});


module.exports = router
