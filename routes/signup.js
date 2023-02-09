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
    console.log("Trying to Sign Up...");

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

    // var insertQuery = "INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `address`, `dob`, `dateAccountCreated`, `phoneNumber`, `bussinessVentureName`, `accountBalance`, `transactionPin`) VALUES (NULL, '" + firstname + "', '" + lastname + "', '" + email + "', '" + password + "', '" + address + "', '" + dob + "', '" + dateAccountCreated + "', '" + phoneNumber + "', '" + bussinessVentureName + "', '" + accountBalance + "', '" + transactionPin + "');";

    var insertQuery = "INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `address`, `dob`, `dateAccountCreated`, `phoneNumber`, `bussinessVentureName`, `accountBalance`, `transactionPin`) VALUES (NULL, 'badman', 'franklin', 'ijeoma@g', 'Livingfaith33', 'mapape', '07/09/2005', '2nd February 2023', '09066881954', 'We-Hub Freelance', '300.0', '0705');"

    db.getConnection((err, pool) => {
        if (err) console.log(err);
        else {
            pool.query(insertQuery, (error, result, rows) => {
                if (error == null) {
                    console.log("New SignUp");
                    if (result != null) {
                        var obj = JSON.parse(JSON.stringify(result))
                        res.status(200).send(obj)
                    }
                }
                else {
                    console.log(error);
                    console.log("Duplicate Entry");
                    res.status(404).send("Duplicate Entry")
                }
            })
        }
    });


});

// Export
module.exports = router