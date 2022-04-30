let port = process.env.PORT || 8080;
let express = require('express');
let server = express();
const dotenv = require('dotenv');
dotenv.config();

server.use('/', require('./routes'));

server.listen(port, () => console.log(`Server listening on port: ${port}`));

// let MongoClient = require('mongodb').MongoClient;
// MongoClient.connect(process.env.DB_URI, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("lantern");
//     dbo.collection("contacts").find().toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });