// Require Built-in modules
const path = require("path");

// Require Third-party modules
const express = require("express");
const { config } = require("process");

// Config env
require("dotenv").config()

// Instance App object
const app = express();

// Path variables
const absolutePathToViews = path.join(__dirname, "views");
const absolutePathToPublic = path.join(__dirname, "public")

// Using Middlewares
// For static files
app.use(express.static(absolutePathToPublic));

// Timestamp To DateString
function timestampToDateString(timestamp) {
    const date = new Date(timestamp * 1000)
    return date.toDateString()
}

// To DateString UTC format
function toDateStringUTC(DateString) {
    const date = new Date(DateString)
    return date.toDateString()
}

// Handling HTTP verbs
// GET verb
app.get('/api', (req, res) => {
    res.sendFile(path.join(absolutePathToViews, "index.html"))
})

app.get('/api/2025-03-08', (req, res) => {
    res.json({
        'UNIX': Date.parse('2025-03-08'),
        'UTC': toDateStringUTC('2025-03-08')
    })
})

app.get('/api/1741415527', (req, res) => {
    res.json({
        'UNIX': '1741415527', 
        'UTC': timestampToDateString(Number('1741415527'))
    })
})

try {
    // Server is Listening
    app.listen(process.env.PORT | 3000)
    // Message
    console.log("Server Is Sucessfull Set Up")
} catch (err) {
    console.error(err)
}