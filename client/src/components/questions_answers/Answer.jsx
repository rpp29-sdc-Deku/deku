import React from 'react';

class Answer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='A'>
        <div>
          <div className='Qblock'>A: <span className='mid' >{this.props.answer.body}</span>
          </div>
        </div>
        <div className='sub'>by: {this.props.answer.answerer_name}, {this.props.answer.date.slice(0, 10)}  |  Helpful? <button className='wordbtn' >Yes</button>({this.props.answer.helpfulness})  |  <button className='wordbtn' >Report</button></div><br></br>
      </div>
    );
  }
}

export default Answer;
