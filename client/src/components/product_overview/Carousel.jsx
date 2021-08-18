/* eslint-disable react/prop-types */
import React from 'react';
import { MdArrowForward, MdArrowBack, MdArrowDropDown } from 'react-icons/md';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import Zoom from 'react-img-zoom';

class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      this.props.expandedView
        ? <div className="carousel">

        <div className="carousel_container" style={{ backgroundImage: `url(${this.props.currentImage})` }} >
          {/* {this.props.expandedView ? <Zoom img={`'${this.props.currentImage}'`} zoomScale={2.5} height={200} width={100} transitionTime={0.5} /> : null } */}
          <div className="icons_container" style={{ maxHeight: 450, overflow: 'auto' }}>
            {this.props.currentStyle.photos
              ? this.props.currentStyle.photos.map((photo, key) => {
                return (<div className= {`icon ${photo.url === this.props.currentImage ? 'selected_icon' : ''} carousel_thumbnail_image`} key={key} onClick={ () => { this.props.thumbnailClick(photo.url); }}></div>);
              })
              : null }
          </div>

          <div className="arrows">
            <div className="arrows_container">
              {this.props.currentStyle.photos
                ? (this.props.currentImage !== this.props.currentStyle.photos[0].url ? <MdArrowBack onClick={() => { this.props.backArrowClick(); }} className="back_arrow" /> : null)
                : null }
              {this.props.currentStyle.photos
                ? (this.props.currentImage !== this.props.currentStyle.photos[this.props.currentStyle.photos.length - 1].url ? <MdArrowForward onClick={() => { this.props.forwardArrowClick(); }} className="forward_arrow" /> : null)
                : null }
            </div>
          </div>

        </div>

      </div>
        : <div className="carousel">

        <div className="carousel_container" style={{ backgroundImage: `url(${this.props.currentImage})` }} onClick={() => { this.props.expand(); }} >
          {/* {this.props.expandedView ? <Zoom img={`'${this.props.currentImage}'`} zoomScale={2.5} height={200} width={100} transitionTime={0.5} /> : null } */}
          <List className="thumbnails_container" style={{ maxHeight: 450, overflow: 'auto' }}>
            {this.props.currentStyle.photos
              ? this.props.currentStyle.photos.map((photo, key) => {
                return (<ListItem style={{ backgroundImage: `url(${photo.url})` }} className= {`${photo.url === this.props.currentImage ? 'selectedd' : ''} carousel_thumbnail_image`} key={key} onClick={ () => { this.props.thumbnailClick(photo.url); }}></ListItem>);
              })
              : null }
              {this.props.currentStyle.photos ? (this.props.currentStyle.photos.length > 7 ? <MdArrowDropDown className="drop_down" onClick={() => this.props.handleDropDownClick()} /> : null) : null }
          </List>

          <div className="arrows">
            <div className="arrows_container">
              {this.props.currentStyle.photos
                ? (this.props.currentImage !== this.props.currentStyle.photos[0].url ? <MdArrowBack onClick={() => { this.props.backArrowClick(); }} className="back_arrow" /> : null)
                : null }
              {this.props.currentStyle.photos
                ? (this.props.currentImage !== this.props.currentStyle.photos[this.props.currentStyle.photos.length - 1].url ? <MdArrowForward onClick={() => { this.props.forwardArrowClick(); }} className="forward_arrow" /> : null)
                : null }
            </div>
          </div>

          {/* <div className="expand_container"> */}
            {/* <MdFullscreenExit /> */}
            {/* <MdFullscreen className="expand" onClick={this.handleFullScreen.bind(this)} /> */}
          {/* </div> */}

        </div>

      </div>
    );
  }
}

export default Carousel;
