/* eslint-disable react/prop-types */
import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';

class ProductCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      compare: false
    };

    this.compareProducts = this.compareProducts.bind(this);
  }

  compareProducts (e) {
    this.setState(({ compare }) => ({
      compare: !compare
    }), () => console.log('THIS STATE COMPARISON MODAL =========== ', this.props.index));
  }

  render () {
    const { compareProducts } = this;
    const { compare } = this.state;
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
          <div className='compare' onClick={compareProducts}></div>
          <div className='product-action-icon' onClick={(e => method(e, index, 'relatedProducts'))}>{ actionIcon }</div>
        </div>
        <div className='card-description-container' onClick={(e => selectProduct(e, productid))} >
          <div className='category-name'>{category}</div>
          <div className='product-card-title'><h4>{name}</h4></div>
          <div className='product-card-price'>${defaultPrice}</div>
          <div className='product-start-rating'></div>
        </div>
        {compare && <ComparisonModal compareProducts={compareProducts} bundle={this.props} /> }
      </div>
    );
  }
}

export default ProductCard;
