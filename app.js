// Import the HTTP module to create an HTTP server
const http = require("http");

// Create an HTTP server and define a callback function to handle requests
const server = http.createServer(function (request, response) {
  // Check if the request URL is "/home" and the method is GET
  if (request.url === "/home" && request.method === "GET") {
    // If the condition is met, send a welcome message as a response
    response.write("<h1>Welcome Home</h1>");
    response.end();
  } else if (request.url === "/addData" && request.method === "POST") {
    // If the request URL is "/addData" and the method is POST
    // Handle incoming data from the request
    request.on("data", (data) => {
      console.log(data); // Log the received data
      response.statusCode = 201; // Set the response status code to 201 (Created)
      response.end('Data received'); // Send a response indicating that data was received
    });
  } else {
    // If none of the above conditions are met, set the response status code to 404 (Not Found)
    response.statusCode = 404;
    response.end("URL not found");
  }
});

// Start the server and listen on port 5200
server.listen(5200, (error) => {
  if (error) {
    console.log("Error!", error); // Log an error message if there's an error starting the server
  } else {
    console.log("Server is running on port 5200.."); // Log a success message if the server starts successfully
  }
});
