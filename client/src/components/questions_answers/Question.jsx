import React from 'react';
import Answer from './Answer.jsx';

class Question extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      displayAll: false
    };
  }

  displayAnswers () {
    this.setState({ displayAll: !this.state.displayAll });
    this.props.displayMoreAnswers();
  }

  render () {
    return (
      <div className='Q'>
        <div className='Qblock'>
          <span className="Qb">Q: {this.props.question
            ? this.props.question.question_body
            : 'No Questions Have Been Asked Yet!'
          }
          </span>
          <span className='Qsub sub' >Helpful?
            <button className='wordbtn' >Yes</button>
              ({this.props.question
              ? this.props.question.question_helpfulness
              : 'n/a'
              })  |  <button className='wordbtn' >Add Answer</button>
          </span>
        </div><br></br>

        {(Object.keys(this.props.question.answers).length > 0 && this.props.question.answers && this.state.displayAll === false)
          ? Object.keys(this.props.question.answers).slice(0, 2).map((el, index) => <Answer key={index} answer={this.props.question.answers[el]} />)
          : this.state.displayAll
            ? Object.keys(this.props.question.answers).map((el, index) => <Answer className='allAnswers' key={index} answer={this.props.question.answers[el]} />)
            : <div>Be the first to provide an answer!<br></br></div> }

        {this.state.displayAll === true && <div><button className='wordbtn' onClick={this.displayAnswers.bind(this)}>Hide Answers</button><br></br><br></br></div>}

        {this.state.displayAll === false && <div><button className='wordbtn' onClick={this.displayAnswers.bind(this)}>See More Answers</button><br></br><br></br></div>}

      </div>
    );
  }
}

export default Question;
