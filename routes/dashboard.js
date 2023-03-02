const express = require('express');
const db = require("../providers/db");
const router = express.Router();

// Middleware
router.use(express.json())
router.use(express.urlencoded())

// RESTful routes
router.get("/:email", (req, res) => {
    var email = req.params.email
    var getUser = "SELECT * FROM `users` WHERE email = '" + email + "';"

    db.getConnection((err, pool) => {
        pool.query(getUser, (error, result, fields) => {
            if (error) console.log(error);
            else if (result[0] == null) {
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
                res.status(200).send(JSON.stringify(obj));
            }
        });
    });
});

router.post("/forgotPassword", (req, res) => {
    var newPassword = req.body.password;
    var email = req.body.email
    var query = "UPDATE `users` SET password = '" + newPassword + "' WHERE email = '" + email + "' ;"

    db.getConnection((err, pool) => {
        if (err) console.log(err);
        pool.query(query, (error, result) => {
            if (error) {
                console.log("This is error: " + error);
                // Couldnt change password
                res.status(401).send()
            }
            else {
                console.log(email + " just changed password");
                // Password changed 
                res.status(200).send()
            }
        });
    })
});

router.post("/changePin", (req, res) => {
    var newPin = req.body.transactionPin
    var email = req.body.email
    var query = "UPDATE `users` SET `transactionPin`= '" + newPin + "' WHERE email = '" + email + "';"

    db.getConnection((err, pool) => {
        pool.query(query, (error, result) => {
            if (error) {
                // Couldnt change password
                res.status(401).send()
            }
            else {
                console.log(email + " just changed pin");
                // Pin changed 
                res.status(200).send()
            }
        })
    })
})

module.exports = router