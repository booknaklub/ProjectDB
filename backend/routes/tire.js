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

async function sendDataToDatabase(querySentence) {
    return await connector.getConnection()
    .then(async conn => {
            let response = await conn.query(querySentence);
            delete response.meta;   
            return response;
        })
        .catch(e => {
            return e;
        })
}

router.get('/tire', function (req, res) {
    let querySentence = `SELECT * FROM tire`
    connectToDatabase(querySentence, res);
});

router.post('/addtire', function (req, res) {
    const payload = req.body;
    const querySentence = `INSERT INTO tire VALUES(null, "${payload.BranchID}", "${payload.ProductID}", "${payload.Brand}", "${payload.Series}", 
    "${payload.TireSize}", "${payload.CompanyNO}", "${payload.Quantity}")`;
    try {
        response.push(await sendDataToDatabase(querySentence));
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;