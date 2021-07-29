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
            <Question key={index} question={q} displayMoreAnswers={this.props.displayMoreAnswers} />)
          : <span key={1}>'No Data to Display'</span> }
      </div>
    );
  }
}

export default QuestionList;
