const router = require('express').Router();
const getReviews = require('../helpers/reviews_helpers.js');
router.get('/reviews', (req, res) => {
  getReviews().then((results) => {
    res.send(results);
  }).catch((err) => {
    res.send(err);
  });
});
module.exports = router;
