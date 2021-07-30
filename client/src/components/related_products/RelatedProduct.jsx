/* eslint-disable react/prop-types */
import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';

class RelatedProduct extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const { relatedProducts } = this.props;

    const relatedProductCards = relatedProducts.map(product => {
      return <RelatedProductCard key={product.id} name={product.name} category={product.category} defaultPrice={product.default_price} />;
    });

    return (
    <div className='related-products-wrapper'>
      <div className='section-title'>Related Products</div>
      {relatedProductCards}
    </div>
    );
  }
}

export default RelatedProduct;
