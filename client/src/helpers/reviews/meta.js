import $ from 'jquery';

const getMeta = (productId, cb) => {
  $.ajax({
    type: 'GET',
    url: '/atelier/reviews/meta',
    success: (data) => {
      cb(data);
    }
  });
};

export default getMeta;
