import React from 'react';

class Question extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='Q'>
        <div className="Qblock">Q: {this.props.question
          ? this.props.question.question_body
          : 'No Questions Have Been Asked Yet!'
      } </div>
        <div>Helpful?
           <button>Yes</button>
           ({this.props.question
             ? this.props.question.question_helpfulness
             : 'n/a'
          })</div>
        <button>Add Answer</button>
        <div className="Ablock">A: (need to create answer component) </div>
        <br></br>

      </div>
    );
  }
}

export default Question;
