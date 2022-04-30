const express = require('express');
const route = express.Router();
let connect = require('../db/connect');

route.get('/', (req, res) => {
    
    connect.getCollection().find().toArray((err, result) => {
        if (err) throw err;
        res.json(result);
        console.log('Contacts Query Successful')
        });
});

module.exports = route;