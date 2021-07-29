import React from 'react';
import ProductCard from './RelatedProductCard.jsx';

class YourOutfit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='your-outfits-wrapper'>
        <div className='section-title'>Your Outfit</div>
        <ProductCard />
      </div>
    );
  }
}

export default YourOutfit;
