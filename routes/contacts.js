const express = require('express');
const route = express.Router();

async function displayFindings() {
    const MongoClient = require('mongodb').MongoClient;
    const uri = process.env.DB_URI;
    let client = MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    let cursor = client.db('lantern').collection('contacts').find().toArray(function(err,results) {
        if (err) throw err;
        console.log(result);
        client.close();
    });
    await client.connect(cursor);
}

route.get('/', (req, res) => {
    res.send(displayFindings());
});


module.exports = route;