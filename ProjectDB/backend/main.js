var mysql = require("mysql");
var express = require("express");
var app = express();
var http = require('http');

var tire = require('./routes/tire');
var company = require('./routes/company');
var magwheel = require('./routes/magwheel');
var inventory = require('./routes/inventory');

// const companyTable = "Company";
// const tireTable = "Tire";
// const magwheelTable = "Magwheel";
// const inventoryTable = "Table";

var connect = mysql.createConnection(({
    host: "localhost",
    database: "mydatabase",
    user: "root",
    password: "123456",
    port: 4500
}));

function connectToDatabase(querySentence,res) {
    connect.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        connect.query(querySentence, function(err, result) {
            if (err) throw err;
            console.log(("Result: " + JSON.stringify(result)));
            res.send(result);
        })
    })
};

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Server started!');
});

app.listen(3000);

app.use('/', tire);
app.use('/', company);
app.use('/', inventory);
app.use('/', magwheel);

// =============== This is path =============== //
// =============== This is path =============== //
// =============== This is path =============== //

// function connectToDatabase(querySentence, res) {
//     connect.connect(function(err) {
//         if (err) throw err;
//         console.log("Connected!");
//         connect.query(querySentence, function (err, result) {
//             if (err) throw err;
//             console.log(("Result: " + JSON.stringify(result)));
//             // return result
//         })
//     });
// }

// function objectToQueryString(obj) {
//     var str = [];
//     for (var p in obj)
//       if (obj.hasOwnProperty(p)) {
//         str.push(encodeURIComponent(p) + "=" + encodecURIComponent(obj[p]));
//       }
//     return str.join("&");
// }

// app.get('/company', function (req, res) {
//     let querySentence = `SELECT * FROM ${companyTable}`
//     connectToDatabase(querySentence, res);
// });

// app.get('/tire', function (req, res) {
//     let querySentence = `SELECT * FROM ${tireTable}`
//     connectToDatabase(querySentence, res);
// });

// app.get('/magwheel', function (req, res) {
//     let querySentence = `SELECT * FROM ${magwheelTable}`
//     connectToDatabase(querySentence, res);
// });

// app.get('/inventory', function (req, res) {
//     let querySentence = `SELECT * FROM ${inventoryTable}`
//     connectToDatabase(querySentence, res);
// });

