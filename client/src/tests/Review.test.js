/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Ratings from '../components/reviews/Ratings.jsx';

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
