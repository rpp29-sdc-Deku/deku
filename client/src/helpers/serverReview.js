import $ from 'jquery';

const getReviews = (productId, cb) => {
  $.ajax({
    type: 'GET',
    url: '/atelier/reviews',
    success: (results) => {
      cb(results);
    }
  });
};

export default getReviews;
