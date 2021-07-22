import React from 'react';
import Carousel from './Carousel.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductDescription from './ProductDescription.jsx';

class Overview extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <div id="overview">
          <Carousel />
          <ProductInfo />
        </div>
        <div>
          <ProductDescription />
        </div>
      </div>
    );
  }
}

export default Overview;
