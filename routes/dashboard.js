const express = require('express');
const db = require("../providers/db");
const router = express.Router();

// Middleware
router.use(express.json())
router.use(express.urlencoded())

// RESTful routes
router.get("/:email", (req, res) => {
    var email = req.params.email;
    var getUser = "SELECT * FROM users WHERE id = '" + email + "' ;"

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
                res.status(201).send(JSON.stringify(obj));
            }
        });
    });
});

module.exports = router