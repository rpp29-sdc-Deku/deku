const router = require('express').Router();
const axios = require('axios');
const keys = require('../config.js');

router.get('/initialQA', (req, res) => {
  axios.get(`${keys.API || process.env.API}qa/questions`, {
    method: 'GET',
    headers: {
      Authorization: keys.TOKEN || process.env.API_TOKEN
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
  axios.put(`${keys.API || process.env.API}qa/questions/${req.body.id}/helpful`, {
    question_id: req.body.id
  }, {
    headers: {
      Authorization: keys.TOKEN || process.env.API_TOKEN
    }
  })
    .then((response) => {
      return axios.get(`${keys.API || process.env.API}qa/questions`, {
        method: 'GET',
        headers: {
          Authorization: keys.TOKEN || process.env.API_TOKEN
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
  axios.put(`${keys.API || process.env.API}qa/answers/${req.body.id}/helpful`, {
    answer_id: req.body.id
  }, {
    headers: {
      Authorization: keys.TOKEN || process.env.API_TOKEN
    }
  })
    .then((response) => {
      return axios.get(`${keys.API || process.env.API}qa/questions`, {
        method: 'GET',
        headers: {
          Authorization: keys.TOKEN || process.env.API_TOKEN
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

router.put('/reportQuestion', (req, res) => {
  axios.put(`${keys.API || process.env.API}qa/questions/${req.body.id}/report`, {
    question_id: req.body.id
  }, {
    headers: {
      Authorization: keys.TOKEN || process.env.API_TOKEN
    }
  })
    .then((response) => {
      return axios.get(`${keys.API || process.env.API}qa/questions`, {
        method: 'GET',
        headers: {
          Authorization: keys.TOKEN || process.env.API_TOKEN
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
      console.log('ERROR REPORTING QUESTION', err);
    });
});

router.put('/reportAnswer', (req, res) => {
  axios.put(`${keys.API || process.env.API}qa/answers/${req.body.id}/report`, {
    question_id: req.body.id
  }, {
    headers: {
      Authorization: keys.TOKEN || process.env.API_TOKEN
    }
  })
    .then((response) => {
      return axios.get(`${keys.API || process.env.API}qa/questions`, {
        method: 'GET',
        headers: {
          Authorization: keys.TOKEN || process.env.API_TOKEN
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
      console.log('ERROR REPORTING QUESTION', err);
    });
});

router.post('/submitQuestion', (req, res) => {
  axios({
    method: 'POST',
    url: `${keys.API || process.env.API}qa/questions`,
    headers: {
      Authorization: keys.TOKEN || process.env.API_TOKEN
    },
    data: req.body
  })
    .then((response) => {
      return axios.get(`${keys.API || process.env.API}qa/questions`, {
        method: 'GET',
        headers: {
          Authorization: keys.TOKEN || process.env.API_TOKEN
        },
        params: {
          product_id: req.body.product_id,
          count: 50
        }
      });
    })
    .then((response) => {
      res.json(response.data.results);
      res.end();
    })
    .catch((err) => {
      console.log('ERROR REPORTING QUESTION', err);
    });
});

router.post('/submitAnswer', (req, res) => {
  const answerForm = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    photos: req.body.photos
  };
  axios({
    method: 'POST',
    url: `${keys.API || process.env.API}qa/questions/${req.body.qid}/answers`,
    headers: {
      Authorization: keys.TOKEN || process.env.API_TOKEN
    },
    data: answerForm
  })
    .then((response) => {
      return axios.get(`${keys.API || process.env.API}qa/questions`, {
        method: 'GET',
        headers: {
          Authorization: keys.TOKEN || process.env.API_TOKEN
        },
        params: {
          product_id: req.body.product_id,
          count: 50
        }
      });
    })
    .then((response) => {
      res.json(response.data.results);
      res.end();
    })
    .catch((err) => {
      console.log('ERROR REPORTING QUESTION', err);
    });
});

router.post('/logInteraction', (req, res) => {
  axios({
    method: 'POST',
    url: `${keys.API || process.env.API}interactions`,
    headers: {
      Authorization: keys.TOKEN || process.env.API_TOKEN
    },
    data: req.body
  })
    .then((response) => {
      console.log('QA interaction sent');
    })
    .catch((err) => {
      console.log('err with interaction', err);
    });
});

module.exports = router;
