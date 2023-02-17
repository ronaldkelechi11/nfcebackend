const express = require('express');
const db = require("../providers/db");
const router = express.Router();

// Middleware
router.use(express.json())
router.use(express.urlencoded())

router.get("/", (req, res) => {
    var query = "SELECT * FROM users"
    db.getConnection((err, pool) => {
        if (err) console.log(err);
        pool.query(query, (error, result) => {
            if (error) {
                res.status(401).send()
            }
            else {
                res.status(200).send(JSON.stringify(result))
            }
        });
    })
})

module.exports = router