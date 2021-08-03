import React from 'react';
import Question from './Question.jsx';

class QuestionList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className='QL'>
        {Object.keys(this.props.questions).length > 0
          ? this.props.questions.slice(0, this.props.length).map((q, index) =>
            <Question key={q.question_id} id={q.question_id} question={q} displayMoreAnswers={this.props.displayMoreAnswers} likeAnswer={this.props.likeAnswer} likeQuestion={this.props.likeQuestion} reportQuestion={this.props.reportQuestion} reportAnswer={this.props.reportAnswer} aModalDisplay={this.props.aModalDisplay} />)
          : <span key={1}>'No Data to Display'</span> }
      </div>
    );
  }
}

export default QuestionList;
