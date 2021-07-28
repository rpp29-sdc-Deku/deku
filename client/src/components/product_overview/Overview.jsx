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
      images: [],
      currentImage: '',
      styles: [],
      currentStyle: '',
      productInfo: {}
    };
  }

  componentDidMount () {
    $.ajax({
      url: '/atelier/productinfo',
      type: 'GET',
      success: (data) => {
        console.log('success in getting back to client product info', data.results);
        this.setState({ productInfo: data.results[0] });
      },
      error: (err) => {
        console.log('error in getting back to client product info', err);
      }
    });

    $.ajax({
      url: '/atelier/productStyles/',
      type: 'GET',
      success: (data) => {
        console.log('success back to client', data.results);
        this.setState({ styles: data.results });
        const imagesArray = this.state.styles.map((style) => {
          return style.photos;
        });
        this.setState({ images: imagesArray });
        this.setState({ currentImage: imagesArray[0][0].url });
      },
      error: (err) => {
        console.log('error in getting back to client', err);
      }
    });
  }

  render () {
    return (
      <div>
        <div className="website_announcement">
          <i>SITE-WIDE ANNOUCEMENT MESSAGE! </i> SALE / DISCOUNT <b>OFFER</b> - <u>NEW PRODUCT HIGHLIGHT</u>
        </div>
        <div id="overview">
          <div id="carouselProductInfo">
            <Carousel productId={this.props.productId} images={this.state.images} currentImage={this.state.currentImage} styles={this.state.styles} currentStyle={this.state.currentStyle} />
            <ProductInfo info={this.state.productInfo} />
          </div>
          <div id="description">
            <ProductDescription />
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
