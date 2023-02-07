const express = require('express');
const db = require("../providers/db");
const router = express.Router();

// Middleware
app.use(express.json())
app.use(express.urlencoded())

// RESTful routes
router.get("/:id", (req, res) => {
    var id = req.params.id;
    var getUser = "SELECT * FROM users WHERE id = '" + id + "' ;"

    db.getConnection((err, pool) => {
        pool.query(getUser, (error, result, fields) => {
            if (error) console.log(error);
            else if (result[0] == null) {
                res.status(401).send()
            }
            else {
                var dataToParse = JSON.stringify(result);
                console.log(dataToParse);
                res.status(200).send(dataToParse);
            }
        });
    });
});

module.exports = router