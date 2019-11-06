const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://arieldoraen:arieldoraen@cluster01-o1fjy.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
  res.send({ express: 'Hello ' });
});

app.get('/', (req, res) => {
  res.send({ express: 'Hello From Expressssss' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));