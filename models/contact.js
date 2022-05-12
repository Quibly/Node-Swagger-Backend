const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contactSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        favoriteColor: {
            type: String,
            required: true
        },
        birthday: {
            type: String,
            required: true
        }
    },
    { versionKey: false }
);

module.exports = mongoose.model('Contact', contactSchema, 'contacts');
