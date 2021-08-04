/* eslint-disable react/prop-types */
import React from 'react';
import { MdArrowForward, MdArrowBack, MdFullscreen, MdArrowDropDown } from 'react-icons/md';

class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className="carousel">
        <div className="carousel_container" style={{ backgroundImage: `url(${this.props.currentImage})` }} >
          <div className="tumbnails_container">
            {this.props.currentStyle.photos
              ? this.props.currentStyle.photos.map((photo, key) => {
                return (<div style={{ backgroundImage: `url(${photo.url})` }} className= "carousel_thumbnail_image" key={key} onClick={ () => { this.props.thumbnailClick(photo.url); }}></div>);
              })
              : null }
              <MdArrowDropDown className="drop_down" />
          </div>
          <div className="arrows">
            <div className="arrows_container">
              <MdArrowBack onClick={() => { this.props.backArrowClick(); }} className="back_arrow" />
              <MdArrowForward onClick={() => { this.props.forwardArrowClick(); }} className="forward_arrow" />
            </div>
          </div>
          <div className="expand_container">
            {/* <MdFullscreenExit /> */}
            <MdFullscreen className="expand" />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
