
import React from 'react';
import axios from 'axios';

class Test extends React.Component {
  constructor (props) {
    super(props);

    this.getRelatedIds = this.getRelatedIds.bind(this);
  }

  // This function returns array of related ids, replaces line 19-28 on relatedproductsid helper page
  getRelatedIds () {
    axios.get(`http://localhost:3000/api/related/?current_product_id=412`, {mode: 'cors'})
      .then(function (response) {
        return response.data
      })
      .then(data => {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render () {
    return (
      <div>
        <button onClick={this.getRelatedIds}> GET RELATED ID TEST BUTTON</button></div>
    );
  }
}

export default Test;
