import React from 'react';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';

class QuestionsAnswers extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      intial: []
    };
  }

  componentDidMount () {
    const url = window.location.href;
    axios.get(`${url}atelier/initialQA`, {
      method: 'GET',
      params: {
        product_id: this.props.id
      }
    })
      .then((response) => {
        this.setState({ initial: response.data });
      });
  }

  render () {
    return (
      <div className='QA'>
        <div id='Qtitle'>Questions and Answers</div>
        <input id='Qsearch' type='text' placeholder='have a question? search for answers...'></input>
        <QuestionList />
        <button>QA</button>
        </div>
    );
  }
}

export default QuestionsAnswers;
