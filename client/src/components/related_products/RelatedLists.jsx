/* eslint-disable react/prop-types */

import React from 'react';
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
import YourOutfit from './YourOutfit.jsx';

class RelatedLists extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      relatedProducts: []
    };
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
        // console.log('🛍️   this state in relatedlists component ', this.state.relatedProducts);
      })
    ;
  }

  render () {
    const { relatedProducts } = this.state;
    return (
      <section className='suggested-products'>
        <RelatedProduct relatedProducts={relatedProducts} />
        <YourOutfit />
      </section>
    );
  }
}

export default RelatedLists;
