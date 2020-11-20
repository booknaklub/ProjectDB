var mysql = require("mysql");
var express = require("express");
var app = express();
var http = require('http');

var tire = require('./routes/tire');
var company = require('./routes/company');
var magwheel = require('./routes/magwheel');
var inventory = require('./routes/branch');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Server started!');
});

app.listen(3000);

app.use('/', tire);
app.use('/', company);
app.use('/', inventory);
app.use('/', magwheel);