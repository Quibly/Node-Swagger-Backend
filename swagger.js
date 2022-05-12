const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My Contacts API',
        description: 'This API GETS and SETS contact information for users'
    },
    host: 'localhost:8080',
    schemes: ['http']
};

const outputFile = './swagger/swagger-output.json';
const endpointsFiles = ['./app.js', './routes/contacts.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
