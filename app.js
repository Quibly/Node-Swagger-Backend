// let hostname = process.env.YOUR_HOST || '0.0.0.0';
let port = process.env.PORT || 8080;
// const connectDB = require('./db/connect');
let express = require('express');
let server = express();
const dotenv = require('dotenv');
dotenv.config();

// connectDB();

// server.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
// });
server.use('/', require('./routes'));

server.listen(port, () => console.log(`Server listening on port: ${port}`));



const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(process.env.DB_URI, function(err, db) {
    if (err) throw err;
    var dbo = db.db("lantern");
    dbo.collection("contacts").find().toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});