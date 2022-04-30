// load modules for routing and getCollection() function from ../db/connect
const express = require('express');
const route = express.Router();
let connect = require('../db/connect');

// create variable for ObjectId use
const { ObjectId } = require('mongodb');

// route endpoint for displaying All contacts
route.get('/', (req, res) => {
    
    const results = connect.getCollection().find();
    
    results.toArray().then((documents) =>  {
        res.status(200).json(documents);
    });
    
});

// route endpoint for displaying a Specific contact
route.get('/:id', (req, res) => {
    
    const contactId = new ObjectId(req.params.id);
    const results = connect.getCollection().find({_id: contactId});
    
    results.toArray().then((documents) =>  {
        res.status(200).json(documents[0]);
    });
    
});

module.exports = route;