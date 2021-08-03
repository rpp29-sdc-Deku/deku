import React from 'react';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import QModal from './QModal.jsx';
import AModal from './AModal.jsx';

class QuestionsAnswers extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questions: [],
      orgLength: 0,
      Qlength: 2,
      Alength: false,
      qModalStatus: false,
      aModalStatus: false,
      question_id: ''
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
    this.setState({ Qlength: this.state.Qlength + 2 });
  }

  displayMoreAnswers () {
    this.setState({ Alength: !this.state.Alength });
  }

  likeAnswer (answerID) {
    const url = window.location.href;
    axios.put(`${url}atelier/likeAnswer`, {
      id: answerID,
      product: this.props.id
    })
      .then((response) => {
        const ordered = this.sortQuestions(response.data);
        const orderedAnswers = this.sortAnswers(ordered);
        const receivedLength = response.data.length;
        this.setState({ questions: orderedAnswers, orgLength: receivedLength });
      });
  }

  likeQuestion (questionID) {
    const url = window.location.href;
    axios.put(`${url}atelier/likeQuestion`, {
      id: questionID,
      product: this.props.id
    })
      .then((response) => {
        const ordered = this.sortQuestions(response.data);
        const orderedAnswers = this.sortAnswers(ordered);
        const receivedLength = response.data.length;
        this.setState({ questions: orderedAnswers, orgLength: receivedLength });
      });
  }

  reportAnswer (answerID) {
    const url = window.location.href;
    axios.put(`${url}atelier/reportAnswer`, {
      id: answerID,
      product: this.props.id
    })
      .then((response) => {
        const ordered = this.sortQuestions(response.data);
        const orderedAnswers = this.sortAnswers(ordered);
        const receivedLength = response.data.length;
        this.setState({ questions: orderedAnswers, orgLength: receivedLength });
      });
  }

  reportQuestion (questionID) {
    const url = window.location.href;
    axios.put(`${url}atelier/reportQuestion`, {
      id: questionID,
      product: this.props.id
    })
      .then((response) => {
        const ordered = this.sortQuestions(response.data);
        const orderedAnswers = this.sortAnswers(ordered);
        const receivedLength = response.data.length;
        this.setState({ questions: orderedAnswers, orgLength: receivedLength });
      });
  }

  qModalDisplay (e) {
    e.preventDefault();
    this.setState({ qModalStatus: !this.state.qModalStatus });
  }

  aModalDisplay (qid) {
    this.setState({ aModalStatus: !this.state.aModalStatus, question_id: qid });
  }

  submitQuestion (formResults) {
    formResults.product_id = this.props.id;
    const url = window.location.href;
    axios.post(`${url}atelier/submitQuestion`, formResults)
      .then((response) => {
        const ordered = this.sortQuestions(response.data);
        const orderedAnswers = this.sortAnswers(ordered);
        const receivedLength = response.data.length;
        this.setState({ qModalStatus: false, questions: orderedAnswers, orgLength: receivedLength });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  submitAnswer (formResults) {
    formResults.product_id = this.props.id;
    const url = window.location.href;
    axios.post(`${url}atelier/submitAnswer`, formResults)
      .then((response) => {
        const ordered = this.sortQuestions(response.data);
        const orderedAnswers = this.sortAnswers(ordered);
        const receivedLength = response.data.length;
        this.setState({ aModalStatus: false, questions: orderedAnswers, orgLength: receivedLength });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render () {
    return (
      <div className='QA'>
        <div id='Qtitle'>QUESTIONS AND ANSWERS</div><br></br>

        <form id='Qsearch'>
          <input id='searchbar' type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'></input>
          <button type='submit' id='searchbtn' >Search</button>
        </form><br></br>

        <QuestionList questions={this.state.questions} length={this.state.Qlength} displayMoreAnswers={this.displayMoreAnswers.bind(this)} likeAnswer={this.likeAnswer.bind(this)} likeQuestion={this.likeQuestion.bind(this)} reportQuestion={this.reportQuestion.bind(this)} reportAnswer={this.reportAnswer.bind(this)} aModalDisplay={this.aModalDisplay.bind(this)} />

        { this.state.questions.length > 2 && this.state.orgLength > this.state.Qlength
          ? <div><button className='btn' onClick={this.displayMoreQuestions.bind(this)} >More Answered Questions</button><button className='btn' onClick={this.qModalDisplay.bind(this)} >Add A Question + </button></div>
          : <button className='btn' onClick={this.qModalDisplay.bind(this)} >Add A Question + </button>
        }

        {this.state.qModalStatus === true && <QModal submitQuestion={this.submitQuestion.bind(this)} qModalDisplay={this.qModalDisplay.bind(this)} />}

        {this.state.aModalStatus === true && <AModal submitAnswer={this.submitAnswer.bind(this)} aModalDisplay={this.aModalDisplay.bind(this)} qid={this.state.question_id} />}
        </div>
    );
  }
}

export default QuestionsAnswers;
