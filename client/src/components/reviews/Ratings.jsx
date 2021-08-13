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
    console.log('this.props.characterstics', this.props.characteristics);
    return (
    <div className='reviewRatings'>
      <div className='reviewRating'>
      <StarsGlobal value={this.props.starValue}/>
      </div>
      <div className='reviewBars'>
        <div>5 stars ------</div>
        <div>4 stars ------</div>
        <div>3 stars ------</div>
        <div>2 stars ------</div>
        <div>1 stars ------</div>
      </div>
      <div className='reviewSpecifics'>
        {this.props.characteristics.map((item, index) => {
          const [characteristics] = Object.keys(item);
          const [value] = Object.values(item);
          return <div key={index}>
            {characteristics}
            <input type='range' min='1' max='5' step='any' value={value.value} disabled></input>
            {this.setDescription(characteristics)}
          </div>;
        })}
      </div>
    </div>);
  }
};

export default Ratings;
