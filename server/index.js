const path = require('path');
const express = require('express'); // npm installed
const axios = require('axios');
const keys = require('./config.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(4000);

// product overview routes

app.get('/overview', (req, res) => {
  axios.get(`${keys.API}products/28212/styles`, {
    headers: {
      Authorization: keys.TOKEN
    }
  })
    .then((response) => {
      console.log('response', response.data);
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log('error in axios', error);
      res.status(400).send('error in server app.get axios');
    });
});
