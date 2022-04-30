// load module for routing
const routes = require('express').Router();

// route instruction for traffic on /contacts
routes.use('/contacts', require('./contacts'));

module.exports = routes;