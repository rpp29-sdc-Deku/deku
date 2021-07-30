// const axios = require('axios');
// const keys = require('../config.js');
const router = require('express').Router();
const { getRelatedProducts, getProductDetails } = require('../helpers/related_products_helpers.js');

router.get('/related-products', (req, res) => {
  const masterProductId = req.query.product_id;
  getRelatedProducts(masterProductId)
    .then((relatedProductIds) => {
      return getProductDetails(relatedProductIds.data);
    })
    .then((productDetails) => {
      return Promise.all(productDetails);
    })
    .then((results) => {
      const relatedProductDetails = results.map((product) => {
        return product.data;
      });
      res.status(200).send(relatedProductDetails);
      res.end();
    })
    .catch((error) => {
      console.log('error in axios', error);
      res.status(400).send('error in server app.get axios');
      res.end();
    });
});

module.exports = router;
