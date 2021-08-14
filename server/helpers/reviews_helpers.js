const axios = require('axios');
const apiToken = process.env.API_TOKEN;

const getReviews = (product, sort) => {
  return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews', {
    headers: {
      Authorization: apiToken
    },
    params: {
      sort: sort,
      count: 100,
      product_id: product
    }
  }).then((results) => {
    return results.data.results;
  });
};
const getMeta = (product) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/?product_id=${product}`, {
    headers: {
      Authorization: apiToken
    }
  }).then((results) => {
    return results.data;
  });
};
const putHelp = (reviewID) => {
  return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${reviewID}/helpful`, null, {
    headers: {
      Authorization: apiToken
    }
  });
};

module.exports.getReviews = getReviews;
module.exports.getMeta = getMeta;
module.exports.putHelp = putHelp;
