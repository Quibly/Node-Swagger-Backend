// load modules for routing and getCollection() function from ../db/connect
const express = require('express');
const route = express.Router();
let contactsController = require('../controllers/contacts');

// route endpoint for displaying All contacts
route.get('/', contactsController.getAll);

// route endpoint for displaying a Specific contact
route.get('/:id', contactsController.getOne);

//route endpoint for adding a new contact
route.post('/', contactsController.createContact);

//route endpoint for updating a contact
route.put('/:id', contactsController.updateContact);

//route endpoint for updating a contact
route.delete('/:id', contactsController.deleteContact);

module.exports = route;
