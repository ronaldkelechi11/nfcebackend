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

    db.getConnection((err, pool) => {
        if (err) {
            console.log(err);
        }
        pool.query("Select * FROM users", (error, result, fields) => {
            res.status(200).send()
            console.log(JSON.stringify(result));
            pool.release()
        })
    });


});

// Export

module.exports = router