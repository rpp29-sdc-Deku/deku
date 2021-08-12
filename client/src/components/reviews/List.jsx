import React from 'react';
import increaseHelp from '../../helpers/reviews/helpfulness.js';
/* eslint-disable react/prop-types */

class List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isClicked: false,
      imageClick: false,
      src: ''
    };
  }

  parseDate (date) {
    const newDate = new Date(date);
    const day = newDate.getDate().toString();
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(newDate).toString();
    const year = newDate.getFullYear().toString();
    return month + ' ' + day + ', ' + year;
  }

  increaseHelfpulness () {
    console.log(this.props.review);
    if (!this.state.isClicked) {
      increaseHelp(this.props.review.review_id);
      this.props.review.helpfulness += 1;
      this.setState({
        isClicked: true
      });
      this.props.reSortList();
    }
  }

  expandImage (e) {
    console.log(e.target.src);
    this.setState({
      imageClick: !this.state.imageClick,
      src: e.target.src
    });
  }

  closeImage () {
    this.setState({
      imageClick: false
    });
  }

  render () {
    return (
      <div className='reviewTile'>
          <div className='reviewStarRating'>
            <h3>starts review | {this.props.review.rating}</h3>
            <h3>{this.props.review.reviewer_name + ', ' + this.parseDate(this.props.review.date)}</h3>
          </div>
          <div className='reviewTitle'>
            <h1>{this.props.review.summary}</h1>
          </div>
          <div className='reviewBody'>
            <p>{this.props.review.body}</p>
            {this.props.review.photos.map((photo) => {
              return <img onClick={this.expandImage.bind(this)} style={{ width: '5em', height: '5em' }}
              key={photo.id} src={photo.url}></img>
              ;
            })}
          </div>
          <div className='reviewHelpful'>
            <p>Helpful? <button onClick={this.increaseHelfpulness.bind(this)} className='reviewYes'>Yes</button>({this.props.review.helpfulness}) | <span>Report</span></p>
          </div>
          <div className='reviewResponse'>
            review response | {this.props.review.response}
          </div>
          <hr></hr>
          {this.state.imageClick && (<div onClick={this.closeImage.bind(this)}className='reviewImageContainer'>
            <img onClick={this.expandImage.bind(this)} className='reviewImage' src={this.state.src}></img>
          </div>)}
        </div>
    );
  }
};

export default List;
