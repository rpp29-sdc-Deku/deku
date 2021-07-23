import React from 'react';
import { shallow } from 'enzyme';
import RelatedProducts from '../components/related_products/RelatedProducts.jsx';

describe('Testing to confirm test infrastructure is working', () => {
  it('should add 1 and 1', () => {
    expect(4 + 4).toEqual(8);
  });
});

describe('Related Products', function () {
  it('should render the Related Products widget without crashing', function () {
    const main = shallow(<RelatedProducts />);
    expect(main.hasClass('related-products')).toBeTruthy();
  });
});