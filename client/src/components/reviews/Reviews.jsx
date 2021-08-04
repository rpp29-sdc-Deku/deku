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
        obj[keys] = results.characteristics[keys].value;
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

  sortList (e) {
    let sorted;
    if (e.target.value === 'Helpful') {
      sorted = this.state.reviewList.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });
    }
    if (e.target.value === 'Newest') {
      sorted = this.state.reviewList.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    }
    if (e.target.value === 'Relevance') {
      sorted = this.state.reviewList.sort((a, b) => {
        if (a.helpfulness === b.helpfulness) {
          return new Date(b.date) - new Date(a.date);
        }
        return b.helpfulness - a.helpfulness;
      });
    }
    console.log('sort,', sorted);
    this.setState({
      reviewList: sorted
    });
  }

  render () {
    return (
      <div>
        REVIEWS
        <div className='Reviews'>
        <Ratings characteristics={this.state.characteristics}/>
        <ListView reviewList={this.state.reviewList} sortList={this.sortList.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default Reviews;
