var mysql = require("mysql");
var express = require("express");
var app = express();
var http = require('http');

const tableName = "Company";

var connect = mysql.createConnection(({
    host: "localhost",
    database: "TireWheel",
    user: "root",
    password: "12345678"
}));

function connectToDatabase(querySentence,res) {
    connect.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        connect.query(querySentence, function (err, result) {
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

app.get('/showAll', function (req, res) {
    let querySentence = `SELECT * FROM ${tableName}`
    connectToDatabase(querySentence,res);

});

app.post('/name?=:name', function(req, res) {
    let querySentence = `INSERT INTO ${tableName} VALUES('3', ${name}, '5555555555')`
    connectToDatabase(querySentence, res);
})

