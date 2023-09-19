// // Starting with node js using console

// console.log("Starting our node ..");

// function sum (a,b){
//     return a+b
// }

// console.log(sum(5,6));
const http = require("http");

const server = http.createServer(function (request, response) {
  if (request.url === "/home" && request.method === "GET") {
    response.write("<h1>welcome Home</h1>");
    response.end();
  } else if (request.url === "/addData" && request.method === "POST") {
    request.on("data", (data) => {
      console.log(data);
      response.statusCode = 201
      response.end('data recieved')
    });
  } else {
    response.statusCode = 404;
    response.end("url not found");
  }
});

server.listen(5200, (error) => {
  if (error) {
    console.log("error!", error);
  } else {
    console.log("we are running on port 5200..");
  }
});
