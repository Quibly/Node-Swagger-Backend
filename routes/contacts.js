// load modules for routing and getCollection() function from ../db/connect
const express = require('express');
const route = express.Router();
let contactsController = require('../controllers/contacts');
// const contact = require('../models/contact');

// load model
// let contact = require('../models/contact');

// create variable for ObjectId use
// const { ObjectId } = require('mongodb');

// route endpoint for displaying All contacts
route.get('/', contactsController.getAll);
    
//     const results = connect.getCollection().find();
    
//     results.toArray().then((documents) =>  {
//         res.status(200).json(documents);
//     });
// });

// route endpoint for displaying a Specific contact
route.get('/:id', contactsController.getOne);
    
//     const contactId = new ObjectId(req.params.id);
//     const results = connect.getCollection().find({_id: contactId});
    
//     results.toArray().then((documents) =>  {
//         res.status(200).json(documents[0]);
//     });
    
// });

//route endpoint for adding a new contact
route.post('/', contactsController.createContact);
    
//     console.log(request.body);
//     const newContact = new contact(request.body);

//     try {
//         await newContact.save()
//         response.status(201).send(newContact);
//     } catch (err) {
//         res.status(500).send(err);
//     }

// });

//route endpoint for updating a contact
route.put('/:id', contactsController.updateContact);
    
//     const {id: _id} = request.params;
//     const content = request.body;

//     console.log(content);

//     contact.findByIdAndUpdate(_id, content, (err) => {
//             if (err) {
//                 response.error(err);
//             } else {
//                 response.status(200).send(content);
//             }
//         }
//     )

// });

//route endpoint for updating a contact
route.delete('/:id', contactsController.deleteContact);
    
//     const contactID = request.params.id;

//     contact.findByIdAndRemove(contactID, (err) => {
//             if (err) {
//                 response.error(err);
//             }
//     });

//     response.status(200).send(`Successfully Deleted Contact: ${contactID}`);
    
// });

module.exports = route;

