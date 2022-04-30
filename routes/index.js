const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Green Ninja Index');
})

routes.use('/contacts', require('./contacts'));

module.exports = routes;