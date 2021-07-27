/* eslint-disable react/prop-types */
import React from 'react';

class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    console.log('🌲', this.props.images.photos);
    return (
      <div className="carousel">
        <img src="https://img.icons8.com/material-outlined/24/000000/expand--v1.png" className="carousel__expand"/>
        <div className="thumbnails">
          {this.props.images.map((image, key) => (
            <img className="thumbnail" key={key} src={`${image.thumbnail_url}`} />
          ))}
        </div>
        <button className="carousel__button carousel__button--left">
          <img src="https://img.icons8.com/windows/32/000000/long-arrow-left.png"/>
        </button>
        <div className="carousel__track-container">
          <ul className="carousel__track">
            {console.log('🐿', this.props.images)}
            {this.props.images.map((image, key) => (
            <li className="carousel__slide" key={key}>
              <img className="carousel__image" src={`${image.url}`} alt=""></img>
            </li>))}
          </ul>
        </div>
        <button className="carousel__button carousel__button--right">
          <img src="https://img.icons8.com/windows/32/000000/long-arrow-right.png"/>
        </button>
        <div className="carousel__nav">
          <button className="carousel__indicator current-slide"></button>
          <button className="carousel__indicator"></button>
          <button className="carousel__indicator"></button>
        </div>
      </div>
    );
  }
}

export default Carousel;
