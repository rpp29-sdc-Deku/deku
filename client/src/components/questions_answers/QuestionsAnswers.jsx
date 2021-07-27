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
        <input id='Qsearch' type='text' placeholder='Have a Question? Search For Answers...'></input>
        <QuestionList questions={this.state.initial} />
        <button>More Answered Questions</button><br></br>
        <button>Add A Question + </button>

        </div>
    );
  }
}

export default QuestionsAnswers;
