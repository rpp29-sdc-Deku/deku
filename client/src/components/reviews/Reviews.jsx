import React from 'react';
import ListView from './ListView.jsx';
import Ratings from './Ratings.jsx';
import AddReview from './AddReview.jsx';
/* eslint-disable react/prop-types */
class Reviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviewList: [],
      characteristics: [],
      ratings: {},
      recommended: {},
      sortBy: 'relevant',
      addReview: false
    };
    // function goes here for api call
    this.props.getReviews(28212, this.state.sortBy, (results) => {
      this.setState({
        reviewList: results
      });
    });

    this.props.getMeta(28212, (results) => {
      const characteristics = [];
      let averageRating = 0;
      let num = 0;
      let den = 0;
      console.log(results);
      for (const keys in results.characteristics) {
        const obj = {};
        obj[keys] = { value: results.characteristics[keys].value, id: results.characteristics[keys].id };
        characteristics.push(obj);
      };
      for (const keys in results.ratings) {
        num = (num + (keys * results.ratings[keys]));
        den += parseInt(results.ratings[keys]);
      }
      averageRating = num / den;
      this.props.setStars(averageRating);
      this.setState({
        characteristics: characteristics,
        ratings: results.ratings,
        recommended: results.recommended
      }, () => console.log(this.state.characteristics));
    });
  }

  sortList (event, sorting) {
    let sorted;
    let sortBy = '';
    const sort = sorting || event.target.value;
    if (sort === 'helpful' || sort === 'Helpful') {
      sortBy = 'helpful';
      sorted = this.state.reviewList.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });
      this.setState({
        reviewList: sorted,
        sortBy: sortBy
      });
      return;
    }
    if (sort === 'newest' || sort === 'Newest') {
      sortBy = 'newest';
      sorted = this.state.reviewList.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      this.setState({
        reviewList: sorted,
        sortBy: sortBy
      });
      return;
    }
    if (sort === 'relevant' || sort === 'Relevance') {
      sortBy = 'relevant';
      sorted = this.state.reviewList.sort((a, b) => {
        if (a.helpfulness === b.helpfulness) {
          return new Date(b.date) - new Date(a.date);
        }
        return b.helpfulness - a.helpfulness;
      });
      this.setState({
        reviewList: sorted,
        sortBy: sortBy
      });
    }
  }

  addReview () {
    console.log('you clicked me');
    this.setState({
      addReview: !this.state.addReview
    });
  }

  render () {
    return (
      <div>
        REVIEWS
        <div className='Reviews'>
        <Ratings starValue={this.props.starsValue} characteristics={this.state.characteristics}/>
        <ListView reviewList={this.state.reviewList} sortBy={this.state.sortBy} sortList={this.sortList.bind(this)} addReview={this.addReview.bind(this)} />
        {this.state.addReview && <AddReview characteristics={this.state.characteristics}/>}
        </div>
      </div>
    );
  }
}

export default Reviews;
