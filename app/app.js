var http = require('http');
var querystring = require('querystring');
var name = '';

var server = http.createServer(function (request, response) {
      if (request.method === 'POST') {
	    handlePost(request, response);
      } else {
	    response.writeHead(200, {
		  'Content-Type': 'text/plain',
		  'Access-Control-Allow-Origin': '*'
	    });
	    response.end(name);
      }
});

function handlePost(request, response) {

      var body = '';

      request.on('data', function(chunk) {
	    body += chunk;
      });

      request.on('end', function() {
	    name = querystring.parse(body).name;

	    response.writeHead(303, {'Location': 'http://localhost:8080'});
	    response.end();
      });
}

server.listen(80);
