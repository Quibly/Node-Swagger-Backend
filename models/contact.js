const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: String
});

module.exports = mongoose.model('Contact', contactSchema, "contacts");