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

  helpfulQuestion (e) {
    this.props.likeQuestion(this.props.id);
  }

  reportQuestion (e) {
    this.props.reportQuestion(this.props.id);
  }

  addAnswer (e) {
    e.preventDefault();
    this.props.aModalDisplay(this.props.id);
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
          <span className='Qsub sub' >
            Helpful?<button className='wordbtn' onClick={this.helpfulQuestion.bind(this)}>Yes</button>
              ({this.props.question.question_helpfulness})
              |  <button className='wordbtn' qid={this.props.id} onClick={this.addAnswer.bind(this)}>Add Answer</button>
              |   <button className='wordbtn' onClick={this.reportQuestion.bind(this)} >Report</button>
          </span>
        </div><br></br>

        {(Object.keys(this.props.question.answers).length > 0 && this.props.question.answers.length > 0 && this.state.displayAll === false)
          ? this.props.question.answers.slice(0, 2).map((el) => <Answer id={el.id} key={el.id} answer={el} likeAnswer={this.props.likeAnswer} reportAnswer={this.props.reportAnswer} />)
          : this.state.displayAll
            ? this.props.question.answers.map((el) => <Answer id={el.id} className='allAnswers' key={el.id} answer={el} likeAnswer={this.props.likeAnswer} reportAnswer={this.props.reportAnswer} />)
            : <div>Be the first to provide an answer!<br></br></div> }

        {this.state.displayAll === true && <div><button className='wordbtn' onClick={this.displayAnswers.bind(this)}>Hide Answers</button><br></br><br></br></div>}

        {this.state.displayAll === false && <div><button className='wordbtn' onClick={this.displayAnswers.bind(this)}>See More Answers</button><br></br><br></br></div>}

      </div>
    );
  }
}

export default Question;
