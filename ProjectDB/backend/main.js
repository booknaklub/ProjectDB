var express = require("express");
var app = express();
var http = require('http');

var tire = require('./routes/tire');
var company = require('./routes/company');
var magwheel = require('./routes/magwheel');
var branch = require('./routes/branch');
var sell = require('./routes/sell')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Server started!');
});

app.listen(3000);

app.use('/', tire);
app.use('/', company);
app.use('/', branch);
app.use('/', magwheel);
app.use('/', sell);