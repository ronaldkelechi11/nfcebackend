const { urlencoded } = require('body-parser');
const express = require('express');
const app = express()
const { createPool, createConnection } = require('mysql');

// Values
var port = process.env.port || 5050

// Middleware
app.use(express.static("./"))
app.use(express.json())
app.use(express.urlencoded())

// MySql Values
const connection = createConnection({
    host:"sql8.freesqldatabase.com",
    user: "sql8605623",
    password: "QiuZizWesJ",
    database: "sql8605623",
    port: 3306
})

// Routes declaration
const signUpServer = require("./routes/signup")
const loginServer = require("./routes/login")
const dashboardServer = require("./routes/dashboard")
const userServer = require("./routes/users")
const transactionServer = require("./routes/transaction")

// Routes assigning
app.use("/signUp", signUpServer)
app.use("/login", loginServer)
app.use("/dashboard", dashboardServer)
app.use("/users", userServer)
app.use("/transaction", transactionServer)

// Server Home
app.get("/", (req, res) => {
    res.send("Welcome to the NFCE API SERVICE")
    console.log("Someone is trying to acces the API");
})


// Start Server
app.listen(port, (err, res) => {
    console.log(port);
    console.log("Server is online on " + port);
})
connection.connect((err) => {
    if (err) {
        console.log("Can't connect to Mysql Server");
    }
    else {
        console.log("Mysql server is ready");
    }
})


