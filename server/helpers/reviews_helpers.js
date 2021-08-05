const axios = require('axios');
const key = require('../config.js');
const getReviews = (sort) => {
  return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews', {
    headers: {
      Authorization: key.TOKEN
    },
    params: {
      sort: sort,
      count: 100,
      product_id: 29000
    }
  }).then((results) => {
    return results.data.results;
  });
};
const getMeta = () => {
  return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/?product_id=28212', {
    headers: {
      Authorization: key.TOKEN
    }
  }).then((results) => {
    return results.data;
  });
};

module.exports.getReviews = getReviews;
module.exports.getMeta = getMeta;
