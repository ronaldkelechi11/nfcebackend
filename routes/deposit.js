const express = require('express');
const db = require("../providers/db");
const router = express.Router();

// Middleware
router.use(express.json())
router.use(express.urlencoded())

var uid = ""
/*  
    on send id to webpage
    need user id
    Check if user has transaction table \
    if(add new transaction) 
    else{
        create table user+userId e.g user205231679
        then add new 
    }
*/
router.get("/:id", (req, res) => {
    var id = req.params.id
    res.status(200).send(id)
    res.sendFile(__dirname.replace("routes", "") + "/public/index.html")
})
router.get("/:id/complete", (req, res) => {
    var id = req.params.id
    // var query = "CHECK TABLE user" + id;
    var query = "CHECK TABLE users"
    db.getConnection((err, pool) => {
        if (err) console.log(err);
        pool.query(query, (error, result, fields) => {
            var answer = JSON.parse(JSON.stringify(result))[0].Msg_type
            console.log(answer);
            // Returns that table does not exist
        })
    })
})
router.get("/failed", (req, res) => {
    // Send error to front-end
})

module.exports = router
