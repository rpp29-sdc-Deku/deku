const router = require('express').Router();
const axios = require('axios');
const keys = require('../config.js');

router.get('/initialQA', (req, res) => {
  axios.get(`${keys.API}qa/questions`, {
    method: 'GET',
    headers: {
      Authorization: keys.TOKEN
    },
    params: {
      product_id: req.query.product_id,
      page: 1,
      count: 2
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
