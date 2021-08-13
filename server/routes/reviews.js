const router = require('express').Router();
const { getReviews, getMeta, putHelp } = require('../helpers/reviews_helpers.js');

router.get('/reviews', (req, res) => {
  getReviews(req.query.sort).then((results) => {
    res.send(results);
  }).catch((err) => {
    res.send(err);
  });
});

router.put('/reviews/helpful', (req, res) => {
  putHelp(req.body.review_Id).then((response) => {
    res.end();
  }).catch((err) => console.log(err));
});

router.get('/reviews/meta', (req, res) => {
  getMeta().then((results) => {
    res.send(results);
  });
});

router.post('/reviews', (req, res) => {
  console.log(req);
});
module.exports = router;
