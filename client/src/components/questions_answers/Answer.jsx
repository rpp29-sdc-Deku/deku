import React from 'react';

class Answer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  helpfulAnswer (e) {
    this.props.likeAnswer(e.target.id);
  }

  render () {
    return (
      <div className='A'>
        <div>
          <div className='Qblock'>A: <span className='mid' >{this.props.answer.body}</span>
          </div>
        </div>
        <div className='sub'>by: {this.props.answer.answerer_name}, {this.props.answer.date.slice(0, 10)}  |  Helpful? <button className='wordbtn' id={this.props.id} onClick={this.helpfulAnswer.bind(this)} key={this.props.id} >Yes</button>({this.props.answer.helpfulness})  |  <button className='wordbtn' >Report</button></div><br></br>
      </div>
    );
  }
}

export default Answer;
