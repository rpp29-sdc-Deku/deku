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
    };
  }

  fetchProductStyles (id) {
    $.ajax({
      url: '/atelier/productStyles/',
      type: 'GET',
      data: { productId: id },
      success: (data) => {
        this.setState({ styles: data.results });
        const imagesArray = this.state.styles.map((style) => {
          return style.photos;
        });
        this.setState({ images: imagesArray });
        this.setState({ currentImage: imagesArray[0][0].url });
        this.setState({ currentStyle: data.results[0] });
      },
      error: (err) => {
        console.log('error in getting back to client', err);
      }
    });
  }

  fetchProducts (id) {
    $.ajax({
      url: '/atelier/product',
      type: 'GET',
      data: { productId: id },
      success: (data) => {
        this.setState({ product: data });
      },
      error: (err) => {
        console.log('error in back to client product', err);
      }
    });
  }

  componentDidMount () {
    this.fetchProductStyles(this.props.productId);
    this.fetchProducts(this.props.productId);
  }

  componentDidUpdate () {
    if (this.props.productId !== this.state.product.id) {
      this.fetchProducts(this.props.productId);
      this.fetchProductStyles(this.props.productId);
    }
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

  addToBag (obj) {
    $.ajax({
      url: 'atelier/cart',
      type: 'POST',
      data: obj,
      success: (data) => {
        console.log('success in post', data);
      },
      error: (err) => {
        console.log('error in post', err);
      }
    });
  }

  render () {
    return (
      <div className="overview">

        <div className="website_announcement">
          <i>SITE-WIDE ANNOUCEMENT MESSAGE! </i> SALE / DISCOUNT <b>OFFER</b> - <u>NEW PRODUCT HIGHLIGHT</u>
        </div>

        <div id="overview">
          <div id="carouselProductInfo">
            <Carousel productId={this.props.productId} images={this.state.images} currentImage={this.state.currentImage} styles={this.state.styles} currentStyle={this.state.currentStyle} currentSetOfThumbnails={this.state.currentSetOfThumbnails} thumbnailClick={this.handleThumbnailClick.bind(this)} forwardArrowClick={this.handleForwardArrowClick.bind(this)} backArrowClick={this.handleBackArrowClick.bind(this)} />
            <ProductInfo product={this.state.product} styles={this.state.styles} currentStyle={this.state.currentStyle} images={this.state.images} changeStyle={this.handleChangeStyle.bind(this)} addToBag={this.addToBag.bind(this)} starValue={this.props.starValue} />
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
