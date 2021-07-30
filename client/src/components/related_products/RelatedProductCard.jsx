/* eslint-disable react/prop-types */
import React from 'react';

class RelatedProductCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const { name, category, defaultPrice } = this.props;

    return (
      <div className='related-product-card'>
        <div className='featured-image'></div>
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
