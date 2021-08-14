/* eslint-disable react/prop-types */
import React from 'react';

class ProductCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const {
      index,
      name,
      category,
      defaultPrice,
      photo,
      addToUserOutfits,
      removeFromUserOutfits,
      selectProduct,
      productid,
      type
    } = this.props;

    let method, actionIcon;
    if (type === 'relatedProduct') {
      method = addToUserOutfits;
      actionIcon = 'Star';
    }

    if (type === 'userOutfit') {
      method = removeFromUserOutfits;
      actionIcon = '❌';
    }

    return (
      <div className='product-card' key={index}>
        <div className='featured-image' style={{ backgroundImage: `url(${photo})` }}>
          <div className='product-action-icon' onClick={(e => method(e, index))}>{ actionIcon }</div>
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
