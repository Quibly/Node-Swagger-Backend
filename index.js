let hostname = process.env.YOUR_HOST || '0.0.0.0';
let port = process.env.YOUR_PORT || process.env.PORT || 443

let express = require('express'),
    server = express();
   
server.use('/', require('./routes/index1.js'));

server.listen(port, hostname, () => {
    console.log(`Server running on port ${port}`);
});


