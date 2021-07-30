import React from 'react';

class Answer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  helpfulAnswer (e) {
    this.props.likeAnswer(this.props.id);
  }

  reportAnswer (e) {
    this.props.reportAnswer(this.props.id);
  }

  render () {
    return (
      <div className='A'>
        <div>
          <div className='Qblock'>A: <span className='mid' >{this.props.answer.body}</span>
          </div>
        </div>
        <div className='sub'>by: {this.props.answer.answerer_name}, {this.props.answer.date.slice(0, 10)}  |  Helpful? <button className='wordbtn' onClick={this.helpfulAnswer.bind(this)} key={this.props.id} >Yes</button>({this.props.answer.helpfulness})  |  <button className='wordbtn' onClick={this.reportAnswer.bind(this)} >Report</button></div><br></br>
      </div>
    );
  }
}

export default Answer;
