// Importing the Express.js library
const express = require("express")

// Defining the port number on which the server will listen
const port = 5100

// Creating an Express application instance
const app = express()

// Setting up a route for handling GET requests to "/welcome"
app.get("/welcome", (req, res) => {
    // Sending a response with a greeting message
    res.send("Hello bro ✌️😍")
})

// Starting the Express server and listening on the specified port
app.listen(port, () => {
    // Logging a message to indicate that the server is running
    console.log(`Server is running on port ${port}..`);
})
