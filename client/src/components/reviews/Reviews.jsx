import React from 'react';
import ListView from './ListView.jsx';
class Reviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviewList: []
    };
    // function goes here for api call
  }

  render () {
    return (
      <div>
        REVIEWS
        <ListView/>
      </div>
    );
  }
}

export default Reviews;
