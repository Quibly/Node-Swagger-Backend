let port = process.env.PORT || 8080;
let express = require('express');
let server = express();
const connect = require('./db/connect');

connect.initDB();

server.use('/', require('./routes'));

server.listen(port, () => console.log(`Server listening on port: ${port}`));