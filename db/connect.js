// .env variable import
const dotenv = require('dotenv');
dotenv.config();

// database code
const MongoClient = require('mongodb').MongoClient;

let _client;
let _collection;


// initialize database
const initDB = () => {
    MongoClient.connect(process.env.DB_URI, (err, client) => {
        if (err) throw err;
        _client = client;
        _collection = _client.db("lantern").collection("contacts");
        console.log('DB Connected');
    });
};

// get data from database
const getCollection = () => {
    return _collection;
}

module.exports = { initDB, getCollection };