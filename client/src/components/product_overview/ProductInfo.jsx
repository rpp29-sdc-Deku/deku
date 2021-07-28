/* eslint-disable react/prop-types */
import React from 'react';
import ProductForm from './ProductForm.jsx';

class ProductInfo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div id="info">
        <div>
          Stars Component
        </div>
        <div className="product_category">
          CATEGORY
        </div>
        <div className="product_name">
          {this.props.info.name}
        </div>
        <div className="product_price">
          {this.props.info.original_price}
        </div>
        <div className="product_style">
          STYLE{'>'}style name<br />
          circle images
        </div>
        <ProductForm />
      </div>
    );
  }
}

export default ProductInfo;
