const express = require('express');
const db = require("../providers/db");
const router = express.Router();

// Middleware
app.use(express.json())
app.use(express.urlencoded())

// RESTful routes
router.get("/:id", (req, res) => {
    var id = req.params.id;

    db.getConnection((err) => {

    });
});

module.exports = router