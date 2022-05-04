// load modules for routing and getCollection() function from ../db/connect
const express = require('express');
const route = express.Router();
let connect = require('../db/connect');

// load model
let contact = require('../models/contact');

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

//route endpoint for adding a new contact
route.post('/add_contact', async (request, response) => {
    
    console.log(request.body);
    const newContact = await new contact(request.body);

    try {
        await newContact.save()
        response.status(200).send(newContact);
    } catch (err) {
        res.status(500).send(err);
    }

});

module.exports = route;

