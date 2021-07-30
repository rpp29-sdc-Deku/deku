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
        <button className="carousel_button left_arrow">
          <img src="https://img.icons8.com/windows/32/000000/long-arrow-left.png"/>
        </button>
        <button className="carousel_button right_arrow">
          <img src="https://img.icons8.com/windows/32/000000/long-arrow-right.png"/>
        </button>
        <div className="carousel_container" style={{ backgroundImage: `url(${this.props.currentImage})` }} >
          <div className="tumbnails_container">
            {this.props.currentStyle.photos
              ? this.props.currentStyle.photos.map((photo, key) => {
                return (<div style={{ backgroundImage: `url(${photo.url})` }} className= "carousel_thumbnail_image" key={key} onClick={ () => { this.props.thumbnailClick(photo.url); }}></div>);
              })
              : null }
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
