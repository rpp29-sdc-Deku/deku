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

  render () {
    return (
      <div className='reviewList'>
        <h2>{this.props.reviewList.length + ' reviews sorted by '}
        <select onChange={this.props.sortList}>
        <option value='Relevance'>Relevance</option>
        <option value='Helpful'>Helpful</option>
        <option value='Newest'>Newest</option>
        </select>
        </h2>
        {this.props.reviewList.map((review, index) => {
          if (this.state.list <= index) {
            return '';
          }
          return <List key={review.review_id} review={review}/>;
        })}
        <button onClick={this.increaseList.bind(this)} disabled={this.props.reviewList.length < 2 || this.state.list >= this.props.reviewList.length}>More Reviews</button>
        <button>Add A Review +</button>
      </div>
    );
  }
}

export default ListView;
