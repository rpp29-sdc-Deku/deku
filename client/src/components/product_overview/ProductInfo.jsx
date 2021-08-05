/* eslint-disable react/prop-types */
import React from 'react';
import ProductForm from './ProductForm.jsx';
import { MdCheck } from 'react-icons/md';

class ProductInfo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    let urlIdArray = [];
    if (this.props.images[0] !== undefined) {
      urlIdArray = this.props.styles.map((style) => {
        return { id: style.style_id, url: style.photos[0].thumbnail_url };
      });
    }
    const findMatchingStyleId = (id) => {
      const selectedStyle = this.props.styles.filter((style) => {
        return style.style_id === id;
      });
      return selectedStyle[0];
    };
    return (
      <div id="info">
        <div className="info">
          Stars Component
        </div>
        <div className="product_category info">
          {this.props.product.category}
        </div>
        <div className="product_name info">
          {this.props.product.name}
        </div>
        <div className="product_price info">
          {this.props.currentStyle.original_price}
        </div>
        <div className="product_style info">
          <b>STYLE{' > '}</b>{this.props.currentStyle.name}
        </div>
        <div className="product_styles_thumbnails info">
          {this.props.images[0] ? urlIdArray.map((element, key) => (<div key={key} onClick={() => { this.props.changeStyle(findMatchingStyleId(element.id), findMatchingStyleId(element.id).photos[0].url); }} className="product_styles_thumbnail" style={{ backgroundImage: `url(${element.url})` }}></div>)) : null }
          <MdCheck className="selected_style_check" />
        </div>
        <ProductForm addToBag={this.props.addToBag} currentStyle={this.props.currentStyle} />
      </div>
    );
  }
}

export default ProductInfo;
