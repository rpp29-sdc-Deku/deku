import React from 'react';
// import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
import YourOutfit from './YourOutfit.jsx';

class RelatedLists extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <section className='suggested-products'>
        <RelatedProduct />
        <YourOutfit />
      </section>
    );
  }
}

export default RelatedLists;
