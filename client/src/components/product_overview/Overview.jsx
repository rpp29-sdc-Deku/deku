/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from './Carousel.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductDescription from './ProductDescription.jsx';
import $ from 'jquery';

class Overview extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      carouselImages: [],
      productInfo: {}
    };
  }

  componentDidMount () {
    $.ajax({
      url: '/atelier/carouselImages',
      type: 'GET',
      success: (data) => {
        console.log('success back to client', data.results[0].photos);
        this.setState({ carouselImages: data.results[0].photos });
      },
      error: (err) => {
        console.log('error in getting back to client', err);
      }
    });
    $.ajax({
      url: '/atelier/productinfo',
      type: 'GET',
      success: (data) => {
        console.log('success in getting back to client product info', data.results);
        this.setState({ productInfo: data.results });
      },
      error: (err) => {
        console.log('error in getting back to client product info', err);
      }
    });
  }

  render () {
    return (
      <div>
        <div id="overview">
          <Carousel images={this.state.carouselImages} />
          <ProductInfo info={this.state.productInfo} />
        </div>
        <div>
          <ProductDescription />
        </div>
      </div>
    );
  }
}

export default Overview;
