const express = require('express');
const db = require("../providers/db");
const { sendMail } = require('../providers/mailer');
const mailer = require("../providers/mailer");
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

    var details = {
        from: "<We-Hub Mailer> wehubfreelanceagaency@gmail.com",
        to: "wehubfreelanceagaency@gmail.com",
        subject: "New User Sign Up Notification",
        text: "Welcome ronald, to Nana Fatimah Co-operative entreprise. we do this and that if this was not you that signed up click here"
        // text: "Welcome " + firstname + ", to Nana Fatimah Co-operative entreprise. we do this and that if this was not you that signed up click here"
    }

    var insertQuery = "INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `address`, `dob`, `dateAccountCreated`, `phoneNumber`, `bussinessVentureName`, `accountBalance`, `transactionPin`) VALUES (NULL, 'badamusi', 'franklin', 'wehubfreelanceagency@gmail.com', 'Livingfaith33', 'mapape', '07/09/2005', '2nd February 2023', '09066881954', 'We-Hub Freelance', '300.0', '0705');"

    // var insertQuery = "INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `address`, `dob`, `dateAccountCreated`, `phoneNumber`, `bussinessVentureName`, `accountBalance`, `transactionPin`) VALUES (NULL, '" + firstname + "', '" + lastname + "', '" + email + "', '" + password + "', '" + address + "', '" + dob + ", '" + dateAccountCreated + "', '" + phoneNumber + "', '" + bussinessVentureName + "', '" + accountBalance + "', '" + transactionPin + "');";

    db.getConnection((err, pool) => {
        if (err) console.log(err);
        else {
            pool.query(insertQuery, (error, result, rows) => {
                if (error == null) {
                    res.status(200).send("Succesful");


                    mailer.sendMail((errorMailer, mailTransporter) => {
                        if (errorMailer) console.log(errorMailer);
                        mailTransporter.sendMail(details, (errorMail) => {
                            console.log("Email Sent");
                        })
                    })


                }
                else {
                    res.status(404).send("Duplicate Entry")
                }
            })
        }
    });


});

// Export

module.exports = router