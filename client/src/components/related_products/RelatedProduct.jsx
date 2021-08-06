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
    // console.log('RELATED PRODUCT PHOTO IN PROPS ======= ', relatedProducts);

    const relatedProductCards = relatedProducts.map(product => {
      if (!product.photos[0].url) {
        product.photos[0].url = 'loading...';
      }
      return <RelatedProductCard key={product.id} name={product.name} category={product.category} defaultPrice={product.default_price} photo={product.photos[0].url} />;
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
