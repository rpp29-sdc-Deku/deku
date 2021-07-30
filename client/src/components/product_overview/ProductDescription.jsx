/* eslint-disable react/prop-types */
import React from 'react';

class ProductDescription extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div id="description">
        <div className="description_slogan">
          <b>
            {this.props.product.slogan}. {this.props.product.description}
          </b>
        </div>
        <div className="description_fakeData">
          <p className="description_lines">
            GMO and Pesticide-free <br /> <br />
            Made with 100% Genetic Modification <br /> <br />
            This is made up <br /> <br />
            It doesn't matter <br />
          </p>
        </div>
      </div>
    );
  }
}

export default ProductDescription;
