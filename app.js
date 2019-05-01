var http =require('http');
var os = require('os');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  text = "Running Node.js:" + process.versions.node + "\n" + os.hostname() + "\nIt Works! Hello\n" + "\nCICD Successful\n";
  console.log("Received Message From:" + JSON.stringify(request.headers ));
  response.end(text);
});

server.listen(3000);

// Put a message on the terminal
console.log("Server running at http://127.0.0.1:3000/");
