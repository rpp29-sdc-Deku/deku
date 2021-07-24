const router = require('express').Router();
const axios = require('axios');
const key = require('../config.js');

router.get('/initialQA', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions', {
    method: 'GET',
    headers: {
      Authorization: key.TOKEN
    },
    params: {
      product_id: req.query.product_id,
      page: 1,
      amount: 2
    }
  })
    .then((response) => {
      res.json(response.data.results);
      res.end();
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
