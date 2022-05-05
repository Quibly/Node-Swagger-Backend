// const express = require('express');
// const route = express.Router();
let connect = require('../db/connect');

// load model
let contact = require('../models/contact');

// create variable for ObjectId use
const { ObjectId } = require('mongodb');

//function for displaying ALL contacts
function getAll(request, response) {
    const results = connect.getCollection().find();
    results.toArray().then((documents) => {
        response.status(200).json(documents);
    });
}

//function for displaying ONE contact
function getOne(request, response) {
    const contactId = new ObjectId(request.params.id);
    const results = connect.getCollection().find({ _id: contactId });
    results.toArray().then((documents) => {
        response.status(200).json(documents[0]);
    });
}

//function for creating a new contact
async function createContact(request, response) {
    console.log(request.body);
    const newContact = new contact(request.body);

    try {
        await newContact.save();
        response.status(201).send(`Created Contact Successfully: \n${newContact}`);
    } catch (err) {
        response.status(500).send(err);
    }
}

//function for updating a contact
function updateContact(request, response) {
    const { id: _id } = request.params;
    const content = request.body;

    console.log(content);

    contact.findByIdAndUpdate(_id, content, { new: true }, (error, docs) => {
        if (docs == null) {
            response
                .status(500)
                .send(`There was a problem with your update. It didn't go through.`);
        } else {
            response.status(200).send(`Updated Contact: ${docs}`);
        }
    });
}

//function for deleting a contact
function deleteContact(request, response) {
    const contactID = request.params.id;

    contact.findByIdAndRemove(contactID, (err, docs) => {
        if (!docs) {
            response.status(500).send('There was a problem with your delete request.');
        } else if (!err) {
            response.status(200).send(`Successfully Deleted Contact ID: ${contactID}`);
        }
    });
}

module.exports = { getAll, getOne, createContact, updateContact, deleteContact };
