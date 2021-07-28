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
        {this.props.questions
          ? this.props.questions.slice(0, this.props.length).map((q, index) =>
            <Question key={q.question_id} question={q} />)
          : 'No Data to Display' }
      </div>
    );
  }
}

export default QuestionList;
