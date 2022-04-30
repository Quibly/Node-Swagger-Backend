const express = require('express');
const route = express.Router();
let app = require('../app');
const dotenv = require('dotenv');
dotenv.config();

route.get('/', (req, res) => {
    const MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(process.env.DB_URI, function(err, db) {
        if (err) throw err;
        let dbo = db.db("lantern");
        dbo.collection("contacts").find().toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
})

// async function displayFindings() {
//     const MongoClient = require('mongodb').MongoClient;
//     MongoClient.connect(process.env.DB_URI, function(err, db) {
//         if (err) throw err;
//         let dbo = db.db("lantern");
//         dbo.collection("contacts").find().toArray(function(err, result) {
//             if (err) throw err;
//             console.log(result);
//             db.close();
//         });
//     });
// }

module.exports = route;