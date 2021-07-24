import React from 'react';
import QuestionList from './QuestionList.jsx';

class QuestionsAnswers extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='QA'>
        <div id='Qtitle'>Questions and Answers</div>
        <div>{this.props.id}</div>
        <input id='Qsearch' type='text' placeholder='have a question? search for answers...'></input>
        <QuestionList />
        </div>
    );
  }
}

export default QuestionsAnswers;
