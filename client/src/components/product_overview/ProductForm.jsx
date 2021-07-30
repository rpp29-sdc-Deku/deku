/* eslint-disable react/prop-types */
import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
// import { makeStyles, withStyles } from '@material-ui/core/styles';

class ProductForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      size: '',
      amount: '1'
    };
  }

  handleSizeChange (e) {
    this.setState({ size: e.target.value });
  }

  handleAmountChange (e) {
    this.setState({ amount: e.target.value });
  }

  // handleSubmit (e) {
  //   e.preventDefault();
  //   alert('you picked the size ', this.state.value);
  // }

  render () {
    return (
      <div>
        <FormControl className="form">
          <Select className="select select_size" onChange={this.handleSizeChange.bind(this)} displayEmpty value={this.state.size}>
            <MenuItem value="" disabled>SELECT SIZE</MenuItem>
            <MenuItem value="S">S</MenuItem>
            <MenuItem value="M">M</MenuItem>
            <MenuItem value="L">L</MenuItem>
          </Select>
          {/* <Select className="select select_amount" onChange={this.handleAmountChange.bind(this)} value={this.state.amount}>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
          </Select> */}
          <div className="add_to_bag">
            ADD TO BAG
          </div>
        </FormControl>
      </div>
    );
  }
}

export default ProductForm;
