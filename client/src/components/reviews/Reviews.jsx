import React from 'react';
import ListView from './ListView.jsx';
import Ratings from './Ratings.jsx';
/* eslint-disable react/prop-types */
class Reviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviewList: [],
      characteristics: [],
      ratings: {},
      recommended: {}
    };
    // function goes here for api call
    this.props.getReviews(28212, (results) => {
      this.setState({
        reviewList: results
      }, () => console.log(this.state.reviewList));
    });

    this.props.getMeta(28212, (results) => {
      const characteristics = [];
      for (const keys in results.characteristics) {
        const obj = {};
        obj[keys] = results.characteristics[keys];
        characteristics.push(obj);
      }
      console.log('this is the characteristics', characteristics);
      this.setState({
        characteristics: characteristics,
        ratings: results.ratings,
        recommended: results.recommended
      }, () => console.log('thissss stateee', this.state));
    });
  }

  render () {
    return (
      <div>
        REVIEWS
        <div className='Reviews'>
        <Ratings characteristics={this.state.characteristics}/>
        <ListView reviewList={this.state.reviewList}/>
        </div>
      </div>
    );
  }
}

export default Reviews;
