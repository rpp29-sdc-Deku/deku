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
      <div className='reviewBars'>
        <div>5 stars ------</div>
        <div>4 stars ------</div>
        <div>3 stars ------</div>
        <div>2 stars ------</div>
        <div>1 stars ------</div>
      </div>
      <div className='reviewSpecifics'>
        <div>size</div>
        <div>comfort</div>
      </div>
    </div>);
  }
};

export default Ratings;
