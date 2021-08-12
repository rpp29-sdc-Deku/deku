/* eslint-disable react/prop-types */
import React from 'react';
import { MdCheck } from 'react-icons/md';

class ThumbnailCircle extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="product_styles_thumbnail" onClick={() => this.props.thumbnailClick()} style={{ backgroundImage: `url(${this.props.element.url})` }}>
        {console.log('🚘', this.props.key)}
        {this.props.selected === this.props.key ? <MdCheck className="selected_style_check" /> : null }
      </div>
    );
  }
}

export default ThumbnailCircle;
