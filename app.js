const { urlencoded } = require('body-parser');
const express = require('express');
const app = express()

// Values
var port = process.env.port || 5050

// Middleware
app.use(express.json())
app.use(express.urlencoded())

// Routes declaration
const signUpServer = require("./routes/signup")
const loginServer = require("./routes/login")

// Routes assigning
app.use("/signUp", signUpServer)
app.use("/login", loginServer)


// Server Home
app.get("/", (req, res) => {
    res.send("Welcome to the NFCE API SERVICE")
})


// Start Server
app.listen(port, (err, res) => {
    console.log("Server is online on " + port);
}) 
