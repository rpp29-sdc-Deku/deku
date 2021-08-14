/* eslint-disable react/prop-types */

import React from 'react';
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
import YourOutfit from './YourOutfit.jsx';

class RelatedLists extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentProduct: null,
      relatedProducts: [],
      userOutfits: []
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
        this.setState({ relatedProducts: relatedProducts.data });
        // console.log('🛍️   FETCH RELATED LISTS STATE =================  ', this.state);
      });
  }

  addToUserOutfits (e, index) {
    const { relatedProducts } = this.state;
    const outfit = relatedProducts[index];
    let existsInOutFit = false;
    // iterate over user ouftits
    this.state.userOutfits.forEach((existingOutfit, i) => {
      if (existingOutfit.id === outfit.id) {
        existsInOutFit = true;
      }
    });

    if (!existsInOutFit) {
      this.state.userOutfits.push(outfit);
      this.setState({ userOutfits: this.state.userOutfits });
      console.log('user ouftis add =========== ', this.state.userOutfits);
    }
  }

  removeFromUserOutfits (e, index) {
    const { userOutfits } = this.state;
    userOutfits.splice(index, 1);
    this.setState({ userOutfits: this.state.userOutfits });
  }

  render () {
    // console.log('RENDER PROPS IN RELATED LISTS ====== ', this.props);
    const { relatedProducts, userOutfits, currentProduct } = this.state;
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
          currentProduct={currentProduct}
          addToUserOutfits={this.addToUserOutfits}
          removeFromUserOutfits={this.removeFromUserOutfits}
          type={'userOutfit'}
        />
      </section>
    );
  }
}

export default RelatedLists;
