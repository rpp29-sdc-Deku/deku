const router = require('express').Router();

router.get('/reviews', (req, res) => {
  res.send('you are connected');
});
module.exports = router;
