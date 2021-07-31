/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Overview from '../components/product_overview/Overview.jsx';

describe('Testing to confirm test infrastructure is working', () => {
  it('should add 2 and 2', () => {
    expect(2 + 2).toEqual(4);
  });
});

describe('Carousel', function () {
  it('should render the Carousel part of the overview widget without crashing', function () {
    const wrapper = shallow(<Overview />);
    expect(wrapper.hasClass('carousel')).toBeTruthy();
  });
});
