const router = require('express').Router();
const { getReviews, getMeta } = require('../helpers/reviews_helpers.js');
router.get('/reviews', (req, res) => {
  getReviews().then((results) => {
    res.send(results);
  }).catch((err) => {
    res.send(err);
  });
});

router.get('/reviews/meta', (req, res) => {
  getMeta().then((results) => {
    res.send(results);
  });
});
module.exports = router;
