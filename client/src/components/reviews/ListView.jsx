import React from 'react';
import List from './List.jsx';
/* eslint-disable react/prop-types */

class ListView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='reviewList'>
        {this.props.reviewList.map(review => {
          console.log('reviewwwww', review);
          return <List key={review.review_id} review={review}/>;
        })}
        <button>More Reviews</button>
        <button>Add A Review +</button>
      </div>
    );
  }
}

export default ListView;
