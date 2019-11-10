const express = require('express');
//require('dotenv').cofig()
const bodyParser = require('body-parser');
<<<<<<< HEAD
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

require('./functions/database')
app.use(cors())
app.use(express.json())
=======

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

>>>>>>> 296468e522b2d80bdc3007e56df66ffa1f7e8dce
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',require('./routes/routerCities'))
app.get('/test', (req, res) => {
  res.send({ express: 'Hello ' });
});

<<<<<<< HEAD
// app.get('/', (req, res) => {
//     res.send({ express: 'Hello From Express' });
//   });
=======
app.get('/', (req, res) => {
  res.send({ express: 'Hello From Expressssss' });
});
>>>>>>> 296468e522b2d80bdc3007e56df66ffa1f7e8dce

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

app.listen(port, () => console.log(`Listening on port ${port}`));