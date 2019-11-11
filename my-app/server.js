const express = require('express');
//require('dotenv').cofig()
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

require('./functions/database')
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', require('./routes/routerCities'))
app.get('/test', (req, res) => {
    res.send({ express: 'Hello ' });
});

// app.get('/', (req, res) => {
//     res.send({ express: 'Hello From Express' });
//   });

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

app.listen(port, () => console.log(`Listening on port ${port}`));