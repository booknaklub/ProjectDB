var mysql = require("mysql");
var express = require("express");
var router = express.Router();

var connect = mysql.createPool(({
    host: "localhost",
    database: "TireWheel",
    user: "root",
    password: "12345678",
    port: 3306
}));

function connectToDatabase(querySentence,res) {
    connect.getConnection(function(err,connection) {
        if (err) throw err;
        console.log("Connected!");
        connection.query(querySentence, function(err, result) {
            if (err) throw err;
            console.log(("Result: " + JSON.stringify(result)));
            res.json(result);
            connection.release();
        })
    })
};

router.get('/branch', function (req, res) {
    let querySentence = `SELECT * FROM branch`
    connectToDatabase(querySentence, res);
});

module.exports = router;