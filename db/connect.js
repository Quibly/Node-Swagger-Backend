// .env variable import
const dotenv = require('dotenv');
dotenv.config();

// database code
const mongoose = require('mongoose');

let _client;
let _collection;

// initialize database
const initDB = () => {
    mongoose.connect(process.env.DB_URI, (err, client) => {
        if (err) throw err;
        _client = client;
        _collection = _client.db.collection('contacts');
    });
};

// get data from database
const getCollection = () => {
    return _collection;
};

module.exports = { initDB, getCollection };
