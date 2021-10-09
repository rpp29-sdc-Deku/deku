import $ from 'jquery';

const getMeta = (productId, cb) => {
  $.ajax({
    type: 'GET',
    url: 'http://35.82.3.48/atelier/reviews/meta',
    data: {
      product_id: productId
    },
    success: (data) => {
      cb(data);
    }
  });
};

export default getMeta;
