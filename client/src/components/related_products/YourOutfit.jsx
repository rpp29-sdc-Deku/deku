/* eslint-disable react/prop-types */
import React from 'react';
import ProductCard from './ProductCard.jsx';

class YourOutfit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const {
      userOutfits,
      addToUserOutfits,
      removeFromUserOutfits,
      selectProduct,
      type
    } = this.props;
    // console.log('RENDER YOUR OUTFITS ========== ', userOutfits);

    const outfitCards = userOutfits.map((outfit, i) => {
      let photo = outfit.photos[0].thumbnail_url;
      if (!photo) {
        photo = '';
      }
      return <ProductCard
      key={i}
      index={i}
      productid={outfit.id}
      name={outfit.name}
      category={outfit.category}
      defaultPrice={outfit.default_price}
      photo={photo}
      removeFromUserOutfits={removeFromUserOutfits}
      selectProduct={selectProduct}
      type={type}
      />;
    });

    return (
      <div className='your-outfits-wrapper'>
        <div className='section-title'><h3>Your Outfit</h3></div>
        <div className='carousel-container'>
          <div className='product-card' onClick={(e => addToUserOutfits(e, 0, 'currentProductDetails'))}>
            <div className='add-to-outfits'>
              <h3>+ Add to Outfit</h3>
            </div>
          </div>
          {outfitCards.length ? outfitCards : null }
        </div>
      </div>
    );
  }
}

export default YourOutfit;
