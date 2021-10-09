import $ from 'jquery';

const getReviews = (productId, sort, cb) => {
  $.ajax({
    type: 'GET',
    url: 'http://35.82.3.48/atelier/reviews',
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
