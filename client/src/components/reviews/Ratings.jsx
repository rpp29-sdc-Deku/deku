import React from 'react';
/* eslint-disable react/prop-types */
class Ratings extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  setDescription (description) {
    if (description === 'Fit' || description === 'Size') {
      return (<div className='reviewDetail'>
        <span>Too Small</span>
        <span className='two'>Perfect</span>
        <span>Too big</span>
       </div>);
    }
    if (description === 'Comfort') {
      return (<div className='reviewDetail'>
        <span>Poor</span>
        <span>Perfect</span>
       </div>);
    }
    if (description === 'Length') {
      return (<div className='reviewDetail'>
        <span>Too Short</span>
        <span className='two'>Perfect</span>
        <span>Too Long</span>
       </div>);
    }
    if (description === 'Fit' || description === 'Width') {
      return (<div className='reviewDetail'>
        <span>Too Loose</span>
        <span className='two'>Perfect</span>
        <span>Too Tight</span>
       </div>);
    }
    if (description === 'Quality') {
      return (<div className='reviewDetail'>
        <span>Poor</span>
        <span>Excelent</span>
       </div>);
    }
    return (<div className='reviewDetail'>
      <span >Poor</span>
      <span>Excelent</span>
     </div>);
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
            {this.setDescription(Object.keys(item)[0])}
          </div>;
        })}
      </div>
    </div>);
  }
};

export default Ratings;
