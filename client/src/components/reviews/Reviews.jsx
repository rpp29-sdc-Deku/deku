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
      filterRatings: [],
      characteristics: [],
      ratings: {},
      recommended: {},
      sortBy: 'relevant',
      addReview: false,
      ratingsBreakdown: {}
    };
    // function goes here for api call
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

  filterRatings (rating) {
    console.log(rating);
    const filterRatings = this.state.filterRatings;
    if (filterRatings.indexOf(rating) === -1) {
      if (filterRatings.length < 5) {
        filterRatings.push(rating);
      } else {
        const index = filterRatings.indexOf(0);
        filterRatings[index] = rating;
      }
    } else {
      const index = filterRatings.indexOf(rating);
      filterRatings[index] = 0;
    }
    this.setState({
      filterRatings: filterRatings
    }, () => console.log(this.state.filterRatings));
  }

  addReview () {
    this.setState({
      addReview: !this.state.addReview
    });
  }

  componentDidMount () {
    this.props.getReviews(this.props.product_id, this.state.sortBy, (results) => {
      this.setState({
        reviewList: results
      });
      this.props.getReviewLength(results.length);
    });
    this.props.getMeta(this.props.product_id, (results) => {
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
        recommended: results.recommended,
        ratingsBreakdown: results.ratings || {}
      });
    });
  }

  componentDidUpdate (prevProps) {
    if (prevProps.product_id !== this.props.product_id) {
      this.props.getReviews(this.props.product_id, this.state.sortBy, (results) => {
        this.setState({
          reviewList: results
        });
        this.props.getReviewLength(results.length);
      });
      this.props.getMeta(this.props.product_id, (results) => {
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
          recommended: results.recommended,
          ratingsBreakdown: results.ratings || {}
        });
      });
    }
  }

  render () {
    return (
      <div>
        REVIEWS
        <div className='Reviews'>
          {this.state.reviewList.length > 0 && (<Ratings filterRatings={this.filterRatings.bind(this)} ratingsBreakdown={this.state.ratingsBreakdown} starValue={this.props.starsValue} characteristics={this.state.characteristics}/>)}
        <ListView filterRatings={this.state.filterRatings} reviewList={this.state.reviewList || []} sortBy={this.state.sortBy} sortList={this.sortList.bind(this)} addReview={this.addReview.bind(this)} />
        {this.state.addReview && <AddReview product_id={this.state.product_id} characteristics={this.state.characteristics}/>}
        </div>
      </div>
    );
  }
}

export default Reviews;
