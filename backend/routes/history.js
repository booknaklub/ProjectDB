var mysql = require("mysql");
var express = require("express");
var router = express.Router();

var connect = mysql.createConnection(({
    host: "localhost",
    database: "TireWheel",
    user: "root",
    password: "12345678",
    port: 3306
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

router.get('/history', function (req, res) {
    let querySentence = `SELECT * FROM history`
    connectToDatabase(querySentence, res);
});

module.exports = router;