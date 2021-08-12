/* eslint-disable react/prop-types */

import React from 'react';
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
import YourOutfit from './YourOutfit.jsx';

class RelatedLists extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      relatedProducts: [],
      userOutfits: []
    };

    this.addToUserOutfits = this.addToUserOutfits.bind(this);
  }

  componentDidMount () {
    axios.get('/atelier/related-products', {
      method: 'GET',
      params: {
        product_id: this.props.masterId
      }
    })
      .then((relatedProducts) => {
        this.setState({ relatedProducts: relatedProducts.data });
        // console.log('🛍️   THIS STATE RELATED LISTS =================  ', this.state);
      });
  }

  addToUserOutfits (e, index) {
    const outfit = this.state.relatedProducts[index];
    this.state.userOutfits.push(outfit);
    this.setState({ userOutfits: this.state.userOutfits });
  }

  render () {
    const { relatedProducts, userOutfits } = this.state;
    return (
      <section className='suggested-products'>
        <RelatedProduct relatedProducts={relatedProducts} addToUserOutfits={this.addToUserOutfits} />
        <YourOutfit userOutfits={userOutfits} />
      </section>
    );
  }
}

export default RelatedLists;
