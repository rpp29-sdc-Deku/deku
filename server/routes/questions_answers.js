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
      count: 50
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

router.put('/likeQuestion', (req, res) => {
  axios.put(`${keys.API}qa/questions/${req.body.id}/helpful`, {
    question_id: req.body.id
  }, {
    headers: {
      Authorization: keys.TOKEN
    }
  })
    .then((response) => {
      return axios.get(`${keys.API}qa/questions`, {
        method: 'GET',
        headers: {
          Authorization: keys.TOKEN
        },
        params: {
          product_id: req.body.product,
          count: 50
        }
      });
    })
    .then((response) => {
      res.json(response.data.results);
      res.end();
    })
    .catch((err) => {
      console.log('ERROR LIKING ANSWER', err);
    });
});

router.put('/likeAnswer', (req, res) => {
  axios.put(`${keys.API}qa/answers/${req.body.id}/helpful`, {
    answer_id: req.body.id
  }, {
    headers: {
      Authorization: keys.TOKEN
    }
  })
    .then((response) => {
      return axios.get(`${keys.API}qa/questions`, {
        method: 'GET',
        headers: {
          Authorization: keys.TOKEN
        },
        params: {
          product_id: req.body.product,
          count: 50
        }
      });
    })
    .then((response) => {
      res.json(response.data.results);
      res.end();
    })
    .catch((err) => {
      console.log('ERROR LIKING ANSWER', err);
    });
});

router.post('reportQuestion', (req, res) => {
  // receive from client - question id
  // send POST request to /qa/questions/:question_id/report endpoint
  // send get request to get questions, same as intial
});

router.post('reportAnswer', (req, res) => {
  // receive from client - answer id
  // send POST request to /qa/answers/:question_id/report endpoint
  // send get request to get answers, same as intial
});

module.exports = router;
