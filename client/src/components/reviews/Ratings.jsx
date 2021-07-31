import React from 'react';
/* eslint-disable react/prop-types */
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
        {this.props.characteristics.map((item, index) => {
          return <div key={index}>
            {Object.keys(item)}
            <input type='range' min='1' max='5' value={Object.values(item)} disabled></input>
            <div className='reviewDetail'>
              <span>too big</span>
              <span> perfect</span>
              <span> too small</span>
            </div>
          </div>;
        })}
      </div>
    </div>);
  }
};

export default Ratings;
