/* eslint-disable react/prop-types */
import React from 'react';
import ProductCard from './ProductCard.jsx';

class RelatedProduct extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const { relatedProducts, addToUserOutfits } = this.props;
    // console.log('RELATED PRODUCT PHOTO IN PROPS ======= ', relatedProducts);

    const ProductCards = relatedProducts.map((product, i) => {
      let photo = product.photos[0].thumbnail_url;
      if (!photo) {
        photo = '';
      }

      return <ProductCard key={i} index={i} productid={product.id} name={product.name} category={product.category} defaultPrice={product.default_price} photo={photo} addToUserOutfits={addToUserOutfits} />;
    });

    return (
    <div className='related-products-wrapper'>
      <div className='section-title'>Related Products</div>
      {ProductCards}
    </div>
    );
  }
}

export default RelatedProduct;
