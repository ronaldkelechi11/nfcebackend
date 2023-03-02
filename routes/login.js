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
    console.log("Trying to Log In");
    var email = req.body.email;
    var password = req.body.password;

    var searchQuery = "SELECT * FROM users WHERE email  = '" + email + "' AND password = '" + password + "';"

    db.getConnection((err, pool) => {
        if (err) {
            console.log(err);
        }
        pool.query(searchQuery, (error, result, fields) => {
            console.log(searchQuery)
            if (result[0] == null) {

                res.status(401).send()
            }
            else {
                var obj = {
                    id: result[0].id,
                    firstname: result[0].firstname,
                    lastname: result[0].lastname,
                    email: result[0].email,
                    password: result[0].password,
                    address: result[0].address,
                    dob: result[0].dob,
                    dateAccountCreated: result[0].dateAccountCreated,
                    phoneNumber: result[0].phoneNumber,
                    bussinessVentureName: result[0].bussinessVentureName,
                    accountBalance: result[0].accountBalance,
                    transactionPin: result[0].transactionPin
                }
                res.status(201).send(JSON.stringify(obj));
            }

        })
    });

});

// Export
module.exports = router