const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Green Ninja');
});

module.exports = routes;