/* eslint-disable react/prop-types */
import React from 'react';

class RelatedProductCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productid: this.props.productid
    };
  }

  render () {
    const { index, name, category, defaultPrice, photo, addToUserOutfits } = this.props;

    return (
      <div className='related-product-card' key={index}>
        <div className='favorite-star' onClick={(e => addToUserOutfits(e, index))}>Star</div>
        <div className='featured-image'><img src={photo} /></div>
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

export default RelatedProductCard;
