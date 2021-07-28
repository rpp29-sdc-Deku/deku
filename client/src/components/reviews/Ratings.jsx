import React from 'react';

class Ratings extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
    <div className='reviewRatings'>
      <div className='reviewRating'></div>
      <div className='reviewBars'></div>
      <div className='reviewSpecifics'></div>
    </div>);
  }
};

export default Ratings;
