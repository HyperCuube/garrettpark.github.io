var http = require('http');
var nStatic = require('node-static');
var fileServer = new nStatic.Server('./PUBLIC');

http.createServer(function (req, res) {
    console.log(req);
	console.log(res);
    fileServer.serve(req, res);
    
}).listen(8080);