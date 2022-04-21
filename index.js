let hostname = '127.0.0.1';
let port = process.env.PORT || 3000

let express = require('express'),
    server = express();
   
server.use('/', require('./routes/index1.js'));

server.listen(port, hostname, () => {
    console.log(`Server running on port ${port}`);
});


