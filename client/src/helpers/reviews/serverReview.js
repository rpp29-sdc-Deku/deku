import $ from 'jquery';

const getReviews = (productId, sort, cb) => {
  $.ajax({
    type: 'GET',
    url: 'http://34.217.233.254:4000/atelier/reviews',
    data: {
      sort: sort,
      productId: productId
    },
    success: (results) => {
      cb(results);
    }
  });
};

export default getReviews;
