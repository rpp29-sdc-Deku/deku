import React from 'react';
import Answer from './Answer.jsx';

class Question extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
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
        </div><br></br><br></br>

        {this.props.question && this.props.question.answers
          ? Object.keys(this.props.question.answers).slice(0, 2).map((el) => <Answer key={this.props.question.answers[el].id} answer={this.props.question.answers[el]} />)
          : 'Be the first to provide an answer!' }
      </div>
    );
  }
}

export default Question;
