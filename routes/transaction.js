const express = require('express');
const db = require("../providers/db");
const router = express.Router();

// Middleware
router.use(express.json())
router.use(express.urlencoded())


router.get("/deposit", (req, res) => {
    /*  
    after PaysatckSDK onSuccess
    params{
        id, receivername, receiver id, type(Deposit, Withdrawal, Transfer),senderId,senderName, amount, isCredit(true, false)
    }
    */
    var id = req.body.id
    var receivername = req.body.receivername
    var receiverId = req.body.receiverId
    var type = req.body.type
    var senderId = req.body.senderId
    var senderName = req.body.senderName
    var amount = req.body.amount
    var isCredit = req.body.isCredit

})

module.exports = router
