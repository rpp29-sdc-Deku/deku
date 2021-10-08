import $ from 'jquery';

const getMeta = (productId, cb) => {
  $.ajax({
    type: 'GET',
    url: 'http://34.217.233.254:4000/atelier/reviews/meta',
    data: {
      product_id: productId
    },
    success: (data) => {
      cb(data);
    }
  });
};

export default getMeta;
