/* eslint-disable react/prop-types */
import React from 'react';

class ProductCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // productid: this.props.productid,
      inUserOutfits: false
    };
  }

  render () {
    // console.log('PRODUCT CARD ============ ');
    const { index, name, category, defaultPrice, photo, addToUserOutfits, selectProduct, productid } = this.props;

    return (
      <div className='product-card' key={index}>
        <div className='featured-image' style={{ backgroundImage: `url(${photo})` }}>
          <div className='favorite-star' onClick={(e => addToUserOutfits(e, index))}>Star</div>
        </div>
        <div className='card-description-container' onClick={(e => selectProduct(e, productid))} >
          <div className='category-name'>{category}</div>
          <div className='product-card-title'>{name}</div>
          <div className='product-card-price'>${defaultPrice}</div>
          <div className='product-start-rating'></div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
