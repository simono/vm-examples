var http = require('http');

var server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello enterJS from Node!\n");
});

server.listen(80);
