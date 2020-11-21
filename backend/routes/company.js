var mysql = require("mysql");
var express = require("express");
var router = express.Router();

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

router.get('/company', function (req, res) {
    let querySentence = `SELECT * FROM company`
    connectToDatabase(querySentence, res);
});

module.exports = router;