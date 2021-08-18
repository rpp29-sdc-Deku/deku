import React from 'react';
import List from './List.jsx';

/* eslint-disable react/prop-types */

class ListView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: 2
    };
  }

  increaseList () {
    this.setState({
      list: this.state.list + 2
    });
  }

  reSortList () {
    const reSort = this.props.sortBy;
    this.props.sortList(null, reSort);
  }

  render () {
    const listView = this;
    let count = 0;
    return (
      <div>
        <h2>{this.props.reviewList.length + ' reviews sorted by '}
        <select defaultValue={
          this.props.sortBy === 'relevant'
            ? 'Relevance'
            : this.props.sortBy === 'helpful'
              ? 'Helpful'
              : this.props.sortBy === 'newest'
                ? 'Newest'
                : ''}
        onChange={this.props.sortList}>
        <option value='Relevance'>Relevance</option>
        <option value='Helpful'>Helpful</option>
        <option value='Newest'>Newest</option>
        </select>
        </h2>
        <div className='reviewList'>
        {this.props.reviewList.map((review, index) => {
          if (this.props.filterRatings.some((value) => value > 0)) {
            if (this.props.filterRatings.indexOf(review.rating) !== -1) {
              count++;
              if (count <= this.state.list) {
                return <List key={review.review_id} review={review} reSortList={listView.reSortList.bind(listView)}/>;
              }
            }
            return '';
          }
          if (this.state.list <= index) {
            return '';
          }
          return <List key={review.review_id} review={review} reSortList={listView.reSortList.bind(listView)}/>;
        })}
        </div>
        <button className='moreReviews' onClick={this.increaseList.bind(this)} disabled={this.props.reviewList.length < 2 || this.state.list >= this.props.reviewList.length}>More Reviews</button>
        <button className='addReviews' onClick={this.props.addReview}>Add A Review +</button>
      </div>
    );
  }
}

export default ListView;
