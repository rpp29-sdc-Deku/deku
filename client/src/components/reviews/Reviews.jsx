import React from 'react';
import ListView from './ListView.jsx';
/* eslint-disable react/prop-types */
class Reviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviewList: []
    };
    // function goes here for api call
    this.props.getReviews(28212, (results) => {
      console.log('👻', results);
    });
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
