import React from 'react';
import StarsGlobal from './StarsGlobal.jsx';
/* eslint-disable react/prop-types */
class Ratings extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviewTotal: 0
    };
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

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps.ratingsBreakdown !== this.props.ratingsBreakdown) {
      this.getTotal();
    }
  }

  getTotal () {
    console.log('what is this in that', this);
    let result = 0;
    console.log('this.props. um ok hehe', this.props.ratingsBreakdown);
    for (const keys in this.props.ratingsBreakdown) {
      result += parseInt(this.props.ratingsBreakdown[keys]);
      console.log('result after being called', result);
    }
    this.setState({
      reviewTotal: result
    });
  }

  render () {
    const rounded = Math.floor(this.props.starValue * 10) / 10;
    return (
    <div className='reviewRatings'>
      <div className='reviewRating'>
        {rounded}
      <StarsGlobal value={this.props.starValue}/>
      </div>
      <div className='reviewBars'>
        <div>
          <label onClick={() => this.props.filterRatings(5)} htmlFor='fiveStars'>5 stars</label>
          <meter id='fiveStars' value={(Number(this.props.ratingsBreakdown[5]) / this.state.reviewTotal) || 0}></meter>
          </div>
        <div>
          <label onClick={() => this.props.filterRatings(4)} htmlFor='fourStars'>4 stars</label>
          <meter id='fourStars' value={(Number(this.props.ratingsBreakdown[4]) / this.state.reviewTotal) || 0}></meter>
          </div>
        <div>
          <label onClick={() => this.props.filterRatings(3)} htmlFor='threeStars'>3 stars</label>
          <meter id='threeStars' value={(Number(this.props.ratingsBreakdown[3]) / this.state.reviewTotal) || 0}></meter>
          </div>
        <div>
          <label onClick={() => this.props.filterRatings(2)} htmlFor='twoStars'>2 stars</label>
          <meter id='twoStars' value={(Number(this.props.ratingsBreakdown[2]) / this.state.reviewTotal) || 0}></meter>
          </div>
        <div>
          <label onClick={() => this.props.filterRatings(1)} htmlFor='oneStars'>1 stars</label>
          <meter id='oneStars' value={(Number(this.props.ratingsBreakdown[1]) / this.state.reviewTotal) || 0}></meter>
          </div>
      </div>
      <div className='reviewSpecifics'>
        {this.props.characteristics.map((item, index) => {
          const [characteristics] = Object.keys(item);
          const [value] = Object.values(item);
          return <div key={index}>
            {characteristics}
            <input type='range' min='1' max='5' step='any' value={value.value || 1} disabled></input>
            {this.setDescription(characteristics)}
          </div>;
        })}
      </div>
    </div>);
  }
};

export default Ratings;
