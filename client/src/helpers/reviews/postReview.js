import axios from 'axios';

const postReview = (results) => {
  console.log('results', results);
  axios.post('/atelier/reviews', results);
};

export default postReview;
