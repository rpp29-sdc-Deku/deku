import React from 'react';
import Question from './Question.jsx';

class QuestionList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='QL'>
        <Question />
      </div>
    );
  }
}

export default QuestionList;
