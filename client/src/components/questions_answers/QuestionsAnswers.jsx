import React from 'react';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';

class QuestionsAnswers extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questions: [],
      orgLength: 0,
      length: 2
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
        const ordered = this.sortQuestions(response.data);
        const orderedAnswers = this.sortAnswers(ordered);
        const receivedLength = response.data.length;
        this.setState({ questions: orderedAnswers, orgLength: receivedLength });
      });
  }

  sortQuestions (questions) {
    const newOrder = [];
    for (const key of questions) {
      newOrder.push([key.question_id, key.question_helpfulness]);
    }
    const finalOrder = questions.sort((a, b) => {
      return b.question_helpfulness - a.question_helpfulness;
    });
    return finalOrder;
  }

  sortAnswers (questions) {
    for (const q of questions) {
      let array = [];
      for (const a in q.answers) {
        array.push(q.answers[a]);
      }
      const finalOrder = array.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });
      q.answers = finalOrder;
    }
    return questions;
  }

  displayMoreQuestions () {
    this.setState({ length: this.state.length + 2 });
  }

  render () {
    return (
      <div className='QA'>
        <div id='Qtitle'>QUESTIONS AND ANSWERS</div><br></br>
        <form id='Qsearch'>
        <input id='searchbar' type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'></input>
        <button type='submit' id='searchbtn' >Search</button>
        </form><br></br>
        <QuestionList questions={this.state.questions} length={this.state.length} />
        { this.state.questions.length > 2 && this.state.orgLength > this.state.length
          ? <div><button className='btn' onClick={this.displayMoreQuestions.bind(this)} >More Answered Questions</button><button className='btn' >Add A Question + </button></div>
          : <button className='btn' >Add A Question + </button>
        }
        </div>
    );
  }
}

export default QuestionsAnswers;
