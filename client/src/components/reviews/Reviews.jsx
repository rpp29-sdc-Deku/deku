import React from 'react';
import ListView from './ListView.jsx';
import Ratings from './Ratings.jsx';
/* eslint-disable react/prop-types */
class Reviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviewList: []
    };
    // function goes here for api call
    this.props.getReviews(28212, (results) => {
      this.setState({
        reviewList: results
      }, () => console.log(this.state.reviewList));
    });
  }

  render () {
    return (
      <div>
        REVIEWS
        <div className='Reviews'>
        <Ratings />
        <ListView reviewList={this.state.reviewList}/>
        </div>
      </div>
    );
  }
}

export default Reviews;
