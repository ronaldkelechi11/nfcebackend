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
    // var email = req.body.email;
    // var password = req.body.password;

    var email = "ronaldkelechi11@gmail.com";
    var password = "password23";

    var searchQuery = "SELECT * FROM users WHERE email  = '" + email + "' AND password = '" + password + "';"

    db.getConnection((err, pool) => {
        console.log(searchQuery);
        if (err) {
            console.log(err);
        }
        pool.query(searchQuery, (error, result, fields) => {
            if (result[0] == null) {
                res.status(401).send()
            }
            else {
                res.status(201).send(JSON.stringify(result[0]));
            }

        })
    });

});

// Export
module.exports = router