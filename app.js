// load modules and set port variable
let port = process.env.PORT || 8080;
let express = require('express');
let server = express();
let swaggerUI = require('swagger-ui-express');
let swaggerDocument = require('./swagger/swagger-output.json');

// configure swagger UI Express
server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// configure bodyparser
let bodyParser = require('body-parser');
server.use(bodyParser.json());

// set connect for use of initDB function from ./db/connect.js
const connect = require('./db/connect');
connect.initDB();

// route traffic
server.use('/', require('./routes'));

//listen for traffic
server.listen(port, () => console.log(`Server listening on port: ${port}`));
