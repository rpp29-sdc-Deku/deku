import React from 'react';
import Carousel from './Carousel.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductDescription from './ProductDescription.jsx';
import $ from 'jquery';

class Overview extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      carouselImages: []
    };
  }

  componentDidMount () {
    $.ajax({
      url: '/overview',
      type: 'GET',
      success: (data) => {
        console.log('success back to client', data.results[0].photos);
        this.setState({ carouselImages: data.results[0].photos });
      },
      error: (err) => {
        console.log('error in getting back to client', err);
      }
    });
  }

  render () {
    return (
      <div>
        <div id="overview">
          <Carousel bigImages={this.state.carouselImages} />
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
