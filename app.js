const { urlencoded } = require('body-parser');
const express = require('express');
const app = express()
const { createPool, createConnection } = require('mysql');

// Values
var port = process.env.port || 5050

// Middleware
app.use(express.json())
app.use(express.urlencoded())

// MySql Values
const connection = createConnection({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "nfcedb"
})

// Routes declaration
const signUpServer = require("./routes/signup")
const loginServer = require("./routes/login")
const dashboardServer = require("./routes/dashboard")

// Routes assigning
app.use("/signUp", signUpServer)
app.use("/login", loginServer)
app.use("/dashboard", dashboardServer)


// Server Home
app.get("/", (req, res) => {
    res.send("Welcome to the NFCE API SERVICE")
    console.log("Welcome to the NFCE API SERVICE");
})


// Start Server
app.listen(port, (err, res) => {
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


