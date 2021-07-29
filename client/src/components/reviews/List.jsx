import React from 'react';
/* eslint-disable react/prop-types */

class List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='reviewTile'>
          <div className='reviewStarRaiting'>
            starts review | {this.props.review.rating}
          </div>
          <div className='reviewTitle'>
            review title | {this.props.review.summary}
          </div>
          <div className='reviewBody'>
            review body | {this.props.review.body}
          </div>
          <div className='reviewHelpful'>
            review helpful | {this.props.review.helpfulness}
          </div>
          <div className='reviewResponse'>
            review response | {this.props.review.response}
          </div>
          <hr></hr>
        </div>
    );
  }
};

export default List;
