const express = require('express');
const db = require("../providers/db");
const router = express.Router();

// Middleware
router.use(express.json())
router.use(express.urlencoded())


router.post("/deposit", (req, res) => {
    /*  
    after PaysatckSDK onSuccess
    params{
        id, receivername, receiver id, type(Deposit, Withdrawal, Transfer),senderId,senderName, amount, isCredit(true, false)
        fetchUser details based on id
    }
    check if table exists 
    true{add new Transaction}
    false{create Transaction(user205231679) and add new Transaction}
    */
    var uid = req.body.uid
    var id = req.body.id //(Will be a random alphaNumeric 11digit)
    var receivername = ""
    var receiverId = uid
    var type = "Deposit"
    var senderId = "1"
    var senderName = "N.F.C.E Deposit"
    var amount = req.body.amount
    var isCredit = "true"

    var searchUidQuery = "SELECT * FROM users WHERE id = '" + uid + "'";
    db.getConnection((pool, err) => {
        pool.query(searchUidQuery, (error, result) => {
            if (err) console.log(err);
            console.log(result);
        });
    })

})

router.post("/withdrawal", (req, res) => {

})

module.exports = router
