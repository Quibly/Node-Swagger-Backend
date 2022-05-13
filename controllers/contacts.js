// const express = require('express');
// const route = express.Router();
let connect = require('../db/connect');

// load model
let contact = require('../models/contact');

// create variable for ObjectId use
const { ObjectId } = require('mongodb');

//function for displaying ALL contacts
function getAll(request, response) {
    try {
        const results = connect.getCollection().find();
        results.toArray().then((documents) => {
            response.status(200).json(documents);
        });
    } catch (err) {
        response.status(500).send(err);
    }
}

//function for displaying ONE contact
function getOne(request, response) {
    try {
        const contactId = new ObjectId(request.params.id);
        const results = connect.getCollection().find({ _id: contactId });
        /*  #swagger.parameters['id'] = {
                in: 'path',
                description: 'Get a specific contact with the _id #',
                required: true,
                type: String,
                example: '62674fc0591581c0a31b814d',
                value: '62674fc0591581c0a31b814d'
            } */
        results.toArray().then((documents) => {
            response.status(200).json(documents[0]);
        });
    } catch (err) {
        response.status(500).send(err);
    }
}

//function for creating a new contact
function createContact(request, response) {
    try {
        const newContact = new contact(request.body);
        const contactObj = JSON.parse(newContact);

        /*  #swagger.parameters['body'] = {
                in: 'body',
                description: 'Add a contact using request body',
                schema: {
                    $firstName: 'Jon',
                    $lastName: 'Doe',
                    $email: 'test@email.com',
                    $favoriteColor: 'test',
                    $birthday: '0101'
                }
        } */

        newContact.save();
        response.status(200).send(contactObj);
    } catch (err) {
        response.status(500).send('There was a problem with adding the new Contact.');
    }
}

//function for updating a contact
function updateContact(request, response) {
    try {
        const { id: _id } = request.params;
        const content = request.body;

        /*  #swagger.parameters['id'] = {
                in: 'path',
                description: 'Get a specific contact with the _id # and change contents with request body',
                required: true,
                type: String,
                example: '627c345cfc96e3e3341ab79e',
                value: '627c345cfc96e3e3341ab79e'
            }

            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Update a contact using request body',
                schema: {
                    $firstName: 'Jon',
                    $lastName: 'Doe',
                    $email: 'test@email.com',
                    $favoriteColor: 'differentTestPut',
                    $birthday: '0101'
                }
            } */

        contact.findByIdAndUpdate(_id, content, { new: true }, (error, docs) => {
            response.status(200).send(`Updated Contact: ${docs}`);
        });
    } catch (err) {
        response.status(500).send(`There was a problem with your update. It didn't go through.`);
    }
}

//function for deleting a contact
function deleteContact(request, response) {
    try {
        const contactID = request.params.id;

        /*  #swagger.parameters['id'] = {
                in: 'path',
                description: 'Get a specific contact by _id # and delete it from the database.',
                required: true,
                type: String,
                example: '627c4da2b444b59102205d86',
                value: '627c4da2b444b59102205d86'
            } */

        contact.findByIdAndRemove(contactID, () => {
            response.status(200).send(`Successfully Deleted Contact ID: ${contactID}`);
        });
    } catch (err) {
        response.status(500).send('There was a problem with your delete request.');
    }
}

module.exports = { getAll, getOne, createContact, updateContact, deleteContact };
