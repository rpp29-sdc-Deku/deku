/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Overview from '../components/product_overview/Overview.jsx';

describe('Testing to confirm test infrastructure is working', () => {
  it('should add 2 and 2', () => {
    expect(2 + 2).toEqual(4);
  });
});

describe('Product Overview', () => {
  it('Overview should render without crashing', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find(Overview)).toBeTruthy();
  });
});
