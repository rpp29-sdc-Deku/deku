/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Ratings from '../components/reviews/Ratings.jsx';

const getReviews = (productId, cb) => {
  $.ajax({
    type: 'GET',
    url: '/atelier/reviews',
    success: (results) => {
      cb(results);
    }
  });
};
describe('Mock test', () => {
  it('Should equal true', () => {
    expect(2 + 2).toEqual(4);
  });
});

describe('Reviews', function () {
  it('should render Ratings component without crashing', function () {
    const wrapper = shallow(<Ratings characteristics={[]}/>);
    expect(wrapper.hasClass('reviewRatings')).toBeTruthy();
  });
});
