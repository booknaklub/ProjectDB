var express = require("express");
var app = express();
var http = require('http');
var bodyParser = require("body-parser");

var tire = require('./routes/tire');
var company = require('./routes/company');
var magwheel = require('./routes/magwheel');
var branch = require('./routes/branch');
var history = require('./routes/history')

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Server started!');
// });

app.listen(3000);

app.use('/', tire);
app.use('/', company);
app.use('/', branch);
app.use('/', magwheel);
app.use('/', history);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));