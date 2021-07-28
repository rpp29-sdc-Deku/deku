import React from 'react';

class ProductForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 'SELECT SIZE'
    };
  }

  handleChange (e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    alert('you picked the size ', this.state.value);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <select value={this.state.value} onChange={this.handleChange.bind(this)}>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </form>
      </div>
    );
  }
}

export default ProductForm;
