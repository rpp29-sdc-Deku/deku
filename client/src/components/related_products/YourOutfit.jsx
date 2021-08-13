/* eslint-disable react/prop-types */
import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';

class YourOutfit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    console.log('this props ======================== ', this.props);
    const { userOutfits } = this.props;
    const outfitCards = userOutfits.map((outfit, i) => {
      let photo = outfit.photos[0].thumbnail_url;
      if (!photo) {
        photo = '';
      }

      return <RelatedProductCard key={i} index={i} productid={outfit.id} name={outfit.name} category={outfit.category} defaultPrice={outfit.default_price} photo={photo} />;
    });

    return (
      <div className='your-outfits-wrapper'>
        <div className='section-title'>Your Outfit</div>
        {outfitCards}
      </div>
    );
  }
}

export default YourOutfit;
