const express = require('express');
const db = require("../providers/db");
const router = express.Router();

// Middleware
router.use(express.json())
router.use(express.urlencoded())

// Restful Methods
router.get("/", (req, res) => {
    res.send("Your are in sign up")
});

router.post("/", (req, res) => {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var password = req.body.password;
    var address = req.body.address;
    var dob = req.body.dob;
    var dateAccountCreated = req.body.dateAccountCreated;
    var phoneNumber = req.body.phoneNumber;
    var bussinessVentureName = req.body.bussinessVentureName;
    var accountBalance = req.body.accountBalance;
    var transactionPin = req.body.transactionPin;

    var insertQuery = "INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `address`, `dob`, `dateAccountCreated`, `phoneNumber`, `bussinessVentureName`, `accountBalance`, `transactionPin`) VALUES (NULL, '" + firstname + "', '" + lastname + "', '" + email + "', '" + password + "', '" + address + "', '" + dob + "', '" + dateAccountCreated + "', '" + phoneNumber + "', '" + bussinessVentureName + "', '" + accountBalance + "', '" + transactionPin + "');";

    db.getConnection((err, pool) => {
        if (err) console.log(err);
        else {
            pool.query(insertQuery, (error, result, rows) => {
                if (error == null) {
                    console.log("New SignUp");
                    res.status(200).send("Succesful")
                }
                else {
                    console.log("Duplicate Entry");
                    res.status(404).send("Duplicate Entry")
                }
            })
        }
    });


});

// Export

module.exports = router