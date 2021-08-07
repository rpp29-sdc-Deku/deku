/* eslint-disable react/prop-types */
import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { MdStarBorder, MdStar } from 'react-icons/md';
// import { makeStyles, withStyles } from '@material-ui/core/styles';

class ProductForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      size: '',
      amount: '',
      starClicked: false
    };
  }

  handleSizeChange (e) {
    this.setState({ size: e.target.value });
  }

  handleAmountChange (e) {
    this.setState({ amount: e.target.value });
  }

  handleStarClick (e) {
    e.preventDefault();
    this.setState({ starClicked: !this.state.starClicked });
  }

  render () {
    let arrayOfSkus = [];
    if (this.props.currentStyle.skus) {
      arrayOfSkus = Object.values(this.props.currentStyle.skus);
    }

    const range = (number) => {
      const result = [];
      for (let i = 1; i <= number; i++) {
        result.push(i);
      }
      return result;
    };
    const findRangeAccordingToSelectedSize = (size) => {
      // return an array of the range
      if (this.props.currentStyle.skus) {
        for (let i = 0; i < arrayOfSkus.length; i++) {
          const sku = arrayOfSkus[i];
          if (size === `"${sku.size}"`) {
            if (sku.quantity > 15) {
              return range(15);
            } else {
              return range(sku.quantity);
            }
          }
        }
      }
    };

    return (
      <div>
        {
          this.props.currentStyle.skus
            ? (Object.keys(this.props.currentStyle.skus)[0] !== 'null'
                ? <FormControl className="form">
                <Select className="select select_size" onChange={this.handleSizeChange.bind(this)} displayEmpty value={this.state.size}>
                  <MenuItem value="" disabled>SELECT SIZE</MenuItem>
                  {arrayOfSkus.map((element, key) => (<MenuItem key={key} value={`"${element.size}"`}>{element.size}</MenuItem>))}
                </Select>
              </FormControl>
                : <FormControl className="form">
                <Select className="select select_size" onChange={this.handleSizeChange.bind(this)} displayEmpty value={this.state.size}>
                  <MenuItem value="" disabled>OUT OF STOCK</MenuItem>
                </Select>
              </FormControl>
              )
            : null
        }

        {
          this.state.size === ''
            ? <FormControl className="form" disabled>
              <Select className="select select_amount" onChange={this.handleAmountChange.bind(this)} value={this.state.amount}>
                <MenuItem value="" disabled>-</MenuItem>
              </Select>
            </FormControl>
            : <FormControl className="form">
              <Select className="select select_amount" onChange={this.handleAmountChange.bind(this)} value={this.state.amount} displayEmpty renderValue={() => (this.state.amount === '' ? 1 : this.state.amount)}>
                {findRangeAccordingToSelectedSize(this.state.size) ? findRangeAccordingToSelectedSize(this.state.size).map((quantity, key) => (<MenuItem key={key} value={`"${quantity}"`}>{quantity}</MenuItem>)) : null}
              </Select>
            </FormControl>
        }
        {
          this.props.currentStyle.skus
            ? (Object.keys(this.props.currentStyle.skus)[0] !== 'null'
                ? <div className="add_to_bag" onClick={() => this.props.addToBag()}>
              ADD TO BAG +
            </div>
                : null)
            : null
        }
        <div className="star" onClick={this.handleStarClick.bind(this)}>
          {this.state.starClicked ? <MdStar /> : <MdStarBorder />}
        </div>
      </div>
    );
  }
}

export default ProductForm;
