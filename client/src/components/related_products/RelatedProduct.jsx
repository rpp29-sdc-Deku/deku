import React from 'react';
import RelatedProductCard from './ProductCard.jsx';

class RelatedProduct extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
    <div className='related-products-wrapper'>
      <div className='section-title'>Related Products</div>
      <RelatedProductCard />
    </div>
    );
  }
}

export default RelatedProduct;
