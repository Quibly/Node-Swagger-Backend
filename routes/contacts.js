// load modules
const express = require('express');
const { ObjectId } = require('mongodb');
const route = express.Router();
let connect = require('../db/connect');

route.get('/', (req, res) => {
    
    const results = connect.getCollection().find();
    
    results.toArray().then((documents) =>  {
        res.status(200).json(documents);
        console.log('Returned All Contacts');
    });
    
});

route.get('/:id', (req, res) => {
    
    const contactId = new ObjectId(req.params.id);
    const results = connect.getCollection().find({_id: contactId});
    
    results.toArray().then((documents) =>  {
        res.status(200).json(documents[0]);
        console.log(`Returned One Contact ${req.params.id}`);
    });
    
});

module.exports = route;