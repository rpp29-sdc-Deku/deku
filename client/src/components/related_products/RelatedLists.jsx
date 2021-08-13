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
  }

  componentDidMount () {
    this.fetchRelatedProducts();
    // console.log('COMPONENT DID MOUNT ======= ', this.state);
  }

  componentDidUpdate (prevState) {
    // console.log('PREV STATE ========= ', prevState);
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
    const outfit = this.state.relatedProducts[index];
    this.state.userOutfits.push(outfit);
    this.setState({ userOutfits: this.state.userOutfits });
  }

  render () {
    // console.log('RENDER PROPS IN RELATED LISTS ====== ', this.props);
    const { relatedProducts, userOutfits } = this.state;
    const { selectProduct } = this.props;

    return (
      <section className='suggested-products'>
        <RelatedProduct relatedProducts={relatedProducts} addToUserOutfits={this.addToUserOutfits} selectProduct={selectProduct} />
        <YourOutfit userOutfits={userOutfits} selectProduct={selectProduct} />
      </section>
    );
  }
}

export default RelatedLists;
