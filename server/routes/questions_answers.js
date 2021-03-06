const router = require('express').Router();
const axios = require('axios');

const apiToken = process.env.API_TOKEN;
const apiURL = process.env.API;

router.get('/initialQA', (req, res) => {
  axios.get('http://localhost:3030/qa/questions', {
    method: 'GET',
    headers: {
      Authorization: apiToken
    },
    params: {
      product_id: req.query.product_id,
      count: 50
    }
  })
    .then((response) => {
      response.data.forEach(obj => {
        obj.question_date = '2021-02-11T00:00:00.000Z';
      });
      res.json(response.data);
      res.end();
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put('/likeQuestion', (req, res) => {
  axios.put('http://localhost:3030/likeQuestion', {
    question_id: req.body.id
  })
    .then((response) => {
      return axios.get('http://localhost:3030/qa/questions', {
        method: 'GET',
        headers: {
          Authorization: apiToken
        },
        params: {
          product_id: 1,
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
      res.send(err);
    });
});

router.put('/likeAnswer', (req, res) => {
  axios.put('http://localhost:3030/likeAnswer', {
    answer_id: req.body.id
  })
    .then((response) => {
      return axios.get('http://localhost:3030/qa/questions', {
        method: 'GET',
        headers: {
          Authorization: apiToken
        },
        params: {
          product_id: 1,
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
      res.send(err);
    });
});

router.put('/reportQuestion', (req, res) => {
  axios.put('http://localhost:3030/reportQuestion', {
    question_id: req.body.id
  }, {
    headers: {
      Authorization: apiToken
    }
  })
    .then((response) => {
      return axios.get('http://localhost:3030/qa/questions', {
        method: 'GET',
        headers: {
          Authorization: apiToken
        },
        params: {
          product_id: 1,
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
      res.send(err);
    });
});

router.put('/reportAnswer', (req, res) => {
  axios.put('http://localhost:3030/reportAnswer', {
    answer_id: req.body.id
  }, {
    headers: {
      Authorization: apiToken
    }
  })
    .then((response) => {
      return axios.get('http://localhost:3030/qa/questions', {
        method: 'GET',
        headers: {
          Authorization: apiToken
        },
        params: {
          product_id: 1,
          count: 50
        }
      });
    })
    .then((response) => {
      res.json(response.data.results);
      res.end();
    })
    .catch((err) => {
      console.log('ERROR REPORTING ANSWER', err);
      res.send(err);
    });
});

router.post('/submitQuestion', (req, res) => {
  axios({
    method: 'POST',
    url: 'http://localhost:3030/submitQuestion',
    headers: {
      Authorization: apiToken
    },
    data: req.body
  })
    .then((response) => {
      return axios.get('http://localhost:3030/qa/questions', {
        method: 'GET',
        headers: {
          Authorization: apiToken
        },
        params: {
          product_id: 1,
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
      res.send(err);
    });
});

router.post('/submitAnswer', (req, res) => {
  const answerForm = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    photos: req.body.photos,
    question_id: req.body.qid,
    product_id: req.body.product_id
  };

  axios({
    method: 'POST',
    url: 'http://localhost:3030/submitAnswer',
    headers: {
      Authorization: apiToken
    },
    data: answerForm
  })
    .then((response) => {
      return axios.get('http://localhost:3030/qa/questions', {
        method: 'GET',
        headers: {
          Authorization: apiToken
        },
        params: {
          product_id: 1,
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
      res.send(err);
    });
});

router.post('/logInteraction', (req, res) => {
  axios({
    method: 'POST',
    url: `${apiURL}interactions`,
    headers: {
      Authorization: apiToken
    },
    data: req.body
  })
    .then((response) => {
      res.send('QA interaction sent');
    })
    .catch((err) => {
      res.send(err);
    });
});

// router.post('/addPhoto', (req, res) => {
//   console.log('adding a photo');
//   axios({
//     method: 'POST',
//     url: 'https://api.imgur.com/3/image',
//     headers: {
//       Authorization:
//     },
//     data: req.body
//   })
//     .then((response) => {
//       res.send('QA interaction sent');
//     })
//     .catch((err) => {
//       res.send('err with interaction', err);
//     });
// });

module.exports = router;
