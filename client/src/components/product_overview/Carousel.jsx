/* eslint-disable react/prop-types */
import React from 'react';
import { MdArrowForward, MdArrowBack, MdFullscreen, MdArrowDropDown } from 'react-icons/md';

class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      expandButtonClicked: false
    };
  }

  handleFullScreen () {
    this.setState({ expandButtonClicked: true });
  }

  render () {
    if (this.props.currentStyle.photos) {
      console.log('♟', this.props.currentStyle.photos.slice(0, 7));
    }
    return (
      <div className="carousel">

        <div className={`carousel_container ${this.state.expandButtonClicked ? 'expand_clicked' : ''}`} style={{ backgroundImage: `url(${this.props.currentImage})` }} >

          <div className="tumbnails_container">
            {this.props.currentStyle.photos
              ? this.props.currentStyle.photos.slice(0, 7).map((photo, key) => {
                return (<div style={{ backgroundImage: `url(${photo.url})` }} className= {`${photo.url === this.props.currentImage ? 'selectedd' : ''} carousel_thumbnail_image`} key={key} onClick={ () => { this.props.thumbnailClick(photo.url); }}></div>);
              })
              : null }
              {this.props.currentStyle.photos ? (this.props.currentStyle.photos.length > 7 ? <MdArrowDropDown className="drop_down" /> : null) : null }
          </div>

          <div className="arrows">
            <div className="arrows_container">
              <MdArrowBack onClick={() => { this.props.backArrowClick(); }} className="back_arrow" />
              <MdArrowForward onClick={() => { this.props.forwardArrowClick(); }} className="forward_arrow" />
            </div>
          </div>

          <div className="expand_container">
            {/* <MdFullscreenExit /> */}
            <MdFullscreen className="expand" onClick={this.handleFullScreen.bind(this)} />
          </div>

        </div>

      </div>
    );
  }
}

export default Carousel;
