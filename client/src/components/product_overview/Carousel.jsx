/* eslint-disable react/prop-types */
import React from 'react';
import { MdArrowForward, MdArrowBack, MdArrowDropDown } from 'react-icons/md';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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
    return (
      <div className="carousel">

        <div className={`carousel_container ${this.state.expandButtonClicked ? 'expand_clicked' : ''}`} style={{ backgroundImage: `url(${this.props.currentImage})` }} >

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
