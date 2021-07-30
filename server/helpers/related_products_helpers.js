const axios = require('axios');
const keys = require('../config.js');
const router = require('express').Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const getRelatedProducts = (productId) => {
  return axios.get(`${keys.API}products/${productId}/related`, {
    headers: {
      Authorization: keys.TOKEN
    }
  });
};

const getProductDetails = (productIds) => {
  // console.log('PRODUCT IDS ARRAY IN HELPER ', productIds);
  const productDetails = productIds.map(id => {
    return axios.get(`${keys.API}products/${id}`, {
      headers: {
        Authorization: keys.TOKEN
      }
    });
  });
  return productDetails;
};

const addProductImages = (productsList) => {
  const productImages = productsList.map(product => {
    return axios.get(`${keys.API}products/${product.id}/styles`, {
      headers: {
        Authorization: keys.TOKEN
      }
    });
  });
  return productImages;
};

module.exports = {
  getRelatedProducts: getRelatedProducts,
  getProductDetails: getProductDetails,
  addProductImages: addProductImages
};
