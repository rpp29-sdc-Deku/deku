import React from 'react';

class RelatedProductCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='related-product-card'>
        <div className='featured-image'></div>
        <div className='card-description-container'>
          <div className='category-name'>CATEGORY</div>
          <div className='product-card-title'>This is The Product Name with Text</div>
          <div className='product-card-price'>$123</div>
          <div className='product-start-rating'></div>
        </div>
      </div>
    );
  }
}

export default RelatedProductCard;
