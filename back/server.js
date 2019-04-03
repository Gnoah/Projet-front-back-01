var http = require('http');
var router = require('./route/route.js');

http.createServer(router.handleRequest).listen(8080);
