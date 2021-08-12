/* eslint-disable react/prop-types */
import React from 'react';

class ProductCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productid: this.props.productid
    };
  }

  render () {
    const { index, name, category, defaultPrice, photo, addToUserOutfits } = this.props;
    const featuredImg = {

    };

    console.log('BACKGROUND IMAGE ======== ', featuredImg);

    return (
      <div className='product-card' key={index}>
        <div className='featured-image' style={{ backgroundImage: `url(${photo})` }}>
          <div className='favorite-star' onClick={(e => addToUserOutfits(e, index))}>Star</div>
        </div>
        <div className='card-description-container'>
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
