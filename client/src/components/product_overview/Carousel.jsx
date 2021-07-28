/* eslint-disable react/prop-types */
import React from 'react';

class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className="carousel">
        <img src="https://img.icons8.com/material-outlined/24/000000/expand--v1.png" className="carousel_expand"/>
        <div className="carousel_thumbnails">
          {console.log('🌥', this.props.images[0])}
          {this.props.images[0]
            ? this.props.images[0].map((image, key) => {
              console.log('❄️', image);
              console.log('🌪', image.thumbnail_url);
              return (<div style={{ backgroundImage: `url(${image.thumbnail_url})` }} className= "carousel_thumbnail" key={key}></div>);
            })
            : null }
        </div>
        <button className="carousel__button carousel__button--left">
          <img src="https://img.icons8.com/windows/32/000000/long-arrow-left.png"/>
        </button>
        <button className="carousel__button carousel__button--right">
          <img src="https://img.icons8.com/windows/32/000000/long-arrow-right.png"/>
        </button>
        <div className="carousel_container" style={{ backgroundImage: `url(${this.props.currentImage})` }} >
          {console.log('🐿', this.props.images)}
          {this.props.images[0]
            ? this.props.images[0].map((image, key) => {
              console.log('🥀', image.url);
              return (<div style={{ backgroundImage: `url(${image.url})` }} className= "carousel_image" key={key}></div>);
            })
            : null }
        </div>
        {/* <div className="carousel__nav">
          <button className="carousel__indicator current-slide"></button>
          <button className="carousel__indicator"></button>
          <button className="carousel__indicator"></button>
        </div> */}
      </div>
    );
  }
}

export default Carousel;
