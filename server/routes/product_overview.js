const axios = require('axios');
const keys = require('../config.js');
const router = require('express').Router();

router.get('/overview', (req, res) => {
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

module.exports = router;
