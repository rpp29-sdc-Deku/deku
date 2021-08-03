/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../components/product_overview/Carousel.jsx';

describe('Testing to confirm test infrastructure is working', () => {
  it('should add 2 and 2', () => {
    expect(2 + 2).toEqual(4);
  });
});

describe('Product Overview', function () {
  it('should render the carousel widget without crashing', function () {
    const wrapper = shallow(<Carousel productId='test' images={[test, test]} currentImage='test' styles={[test, test]} currentStyle={{}} thumbnailClick={test} />);
    expect(wrapper.hasClass('carousel')).toBeTruthy();
  });
});
