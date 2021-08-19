/* eslint-disable react/prop-types */

import React from 'react';
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
import YourOutfit from './YourOutfit.jsx';
import Overview from '../product_overview/Overview.jsx';

class RelatedLists extends React.Component {
  constructor (props) {
    super(props);
    const cachedOutfits = JSON.parse(window.localStorage.getItem('outfits'));
    this.state = {
      currentProduct: null,
      currentProductDetails: null,
      relatedProducts: [],
      userOutfits: cachedOutfits || []
    };

    this.update = false;
    // console.log('THIS STATE RELATED LISTS ', this.state);
    this.addToUserOutfits = this.addToUserOutfits.bind(this);
    this.removeFromUserOutfits = this.removeFromUserOutfits.bind(this);
  }

  componentDidMount () {
    this.fetchRelatedProducts();
    // console.log('COMPONENT DID MOUNT ======= ', this.state);
  }

  componentDidUpdate (prevState) {
    // console.log('COMPONENT DID UPDATE ======= ');
    const { productId } = this.props;
    if (this.state.currentProduct !== productId) {
      this.setState(prevstate => ({
        currentProduct: productId
      }));
      // console.log('COMPONENT UPDATE INNER ===== ', this.state);
      this.fetchRelatedProducts();
    }
  }

  fetchRelatedProducts () {
    const { productId } = this.props;
    axios.get('/atelier/related-products', {
      method: 'GET',
      params: {
        product_id: productId
      }
    })
      .then((relatedProducts) => {
        console.log('related products data ', relatedProducts.data.length);
        const currentProduct = relatedProducts.data.length - 1;
        const currentProductDetails = relatedProducts.data.splice(currentProduct);
        this.setState({
          relatedProducts: relatedProducts.data,
          currentProductDetails: currentProductDetails
        });
        console.log('🛍️   FETCH RELATED LISTS STATE =================  ', this.state);
      });
  }

  addToUserOutfits (e, index, list) {
    const outfit = this.state.[list][index];
    let newOutfitItem = true;
    // iterate over user ouftits
    this.state.userOutfits.forEach((existingOutfit, i) => {
      if (existingOutfit.id === outfit.id) {
        newOutfitItem = false;
      }
    });

    if (newOutfitItem) {
      this.state.userOutfits.push(outfit);
      this.setState({
        userOutfits: this.state.userOutfits
      }, () => window.localStorage.setItem('outfits', JSON.stringify(this.state.userOutfits))
      );
      // console.log('user ouftis add =========== ', this.state.userOutfits);
      // const cachedOutfits = window.localStorage.getItem('outfits');
      // console.log('localStorage ======== ', JSON.parse(cachedOutfits));
    }
  }

  removeFromUserOutfits (e, index) {
    const { userOutfits } = this.state;
    userOutfits.splice(index, 1);
    this.setState({
      userOutfits: this.state.userOutfits
    }, () => window.localStorage.setItem('outfits', JSON.stringify(this.state.userOutfits))
    );
    // const cachedOutfits = window.localStorage.getItem('outfits');
    // console.log('removed from local storage ======== ', JSON.parse(cachedOutfits));
  }

  render () {
    // console.log('RENDER PROPS IN RELATED LISTS ====== ', this.props);
    const { relatedProducts, userOutfits, currentProductDetails } = this.state;
    // console.log('RENDER RELATED LISTS USEROUTFITS ', userOutfits);
    const { selectProduct } = this.props;

    return (
      <section className='suggested-products'>
        <RelatedProduct
          relatedProducts={relatedProducts}
          addToUserOutfits={this.addToUserOutfits}
          selectProduct={selectProduct}
          type={'relatedProduct'}
        />

        <YourOutfit
          userOutfits={userOutfits}
          selectProduct={selectProduct}
          currentProductDetails={currentProductDetails}
          addToUserOutfits={this.addToUserOutfits}
          removeFromUserOutfits={this.removeFromUserOutfits}
          type={'userOutfit'}
        />
      </section>
    );
  }
}

export default RelatedLists;
