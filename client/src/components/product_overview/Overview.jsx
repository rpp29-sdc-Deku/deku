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
      product: {}, // main thing that comes from API
      styles: [], // main thing that comes from API
      images: [],
      currentImage: '',
      currentStyle: {}
      // skus: {}
    };
  }

  componentDidMount () {
    $.ajax({
      url: '/atelier/productStyles/',
      type: 'GET',
      data: { productId: 24778 },
      success: (data) => {
        console.log('success back to client', data.results);
        this.setState({ styles: data.results });
        const imagesArray = this.state.styles.map((style) => {
          return style.photos;
        });
        this.setState({ images: imagesArray });
        this.setState({ currentImage: imagesArray[0][0].url });
        this.setState({ currentStyle: data.results[0] });
        // this.setState({ skus: this.state.currentStyle.skus });
      },
      error: (err) => {
        console.log('error in getting back to client', err);
      }
    });

    $.ajax({
      url: '/atelier/product',
      type: 'GET',
      success: (data) => {
        console.log('success back to client product', data);
        this.setState({ product: data });
      },
      error: (err) => {
        console.log('error in back to client product', err);
      }
    });
  }

  handleThumbnailClick (image) {
    this.setState({ currentImage: image });
  }

  handleChangeStyle (style, image) {
    this.setState({ currentStyle: style });
    this.setState({ currentImage: image });
  }

  handleBackArrowClick () {
    let index;
    this.state.currentStyle.photos.forEach((photo, ind) => {
      if (this.state.currentImage === photo.url) {
        index = ind;
        if (index === 0) {
          index = this.state.currentStyle.photos.length - 1;
        } else {
          index--;
        }
      }
    });
    this.setState({ currentImage: this.state.currentStyle.photos[index].url });
  }

  handleForwardArrowClick () {
    let index;
    this.state.currentStyle.photos.forEach((photo, ind) => {
      if (this.state.currentImage === photo.url) {
        index = ind;
        if (index === this.state.currentStyle.photos.length - 1) {
          index = 0;
        } else {
          index++;
        }
      }
    });
    this.setState({ currentImage: this.state.currentStyle.photos[index].url });
  }

  render () {
    return (
      <div className="overview">
        <div className="website_announcement">
          <i>SITE-WIDE ANNOUCEMENT MESSAGE! </i> SALE / DISCOUNT <b>OFFER</b> - <u>NEW PRODUCT HIGHLIGHT</u>
        </div>
        <div id="overview">
          <div id="carouselProductInfo">
            <Carousel productId={this.props.productId} images={this.state.images} currentImage={this.state.currentImage} styles={this.state.styles} currentStyle={this.state.currentStyle} thumbnailClick={this.handleThumbnailClick.bind(this)} forwardArrowClick={this.handleForwardArrowClick.bind(this)} backArrowClick={this.handleBackArrowClick.bind(this)} />
            <ProductInfo product={this.state.product} styles={this.state.styles} currentStyle={this.state.currentStyle} images={this.state.images} changeStyle={this.handleChangeStyle.bind(this)} skus={this.state.skus} />
          </div>
          <div >
            <ProductDescription product={this.state.product} />
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
