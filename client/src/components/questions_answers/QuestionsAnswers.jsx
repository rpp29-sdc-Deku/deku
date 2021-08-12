import React from 'react';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import QModal from './QModal.jsx';
import AModal from './AModal.jsx';
import Search from './Search.jsx';
import withClickTrackingQA from './withClickTrackingQA.jsx';
const QModalWithTracking = withClickTrackingQA(QModal);
const AModalWithTracking = withClickTrackingQA(AModal);
const SearchWithTracking = withClickTrackingQA(Search);

class QuestionsAnswers extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questions: [],
      filteredQuestions: [],
      activeSearch: false,
      orgLength: 0,
      Qlength: 2,
      Alength: false,
      qModalStatus: false,
      aModalStatus: false,
      question_id: '',
      qlDisplay: false
    };

    this.submitSearch = this.submitSearch.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.displayMoreAnswers = this.displayMoreAnswers.bind(this);
    this.likeAnswer = this.likeAnswer.bind(this);
    this.likeQuestion = this.likeQuestion.bind(this);
    this.reportQuestion = this.reportQuestion.bind(this);
    this.reportAnswer = this.reportAnswer.bind(this);
    this.aModalDisplay = this.aModalDisplay.bind(this);
    this.displayMoreQuestions = this.displayMoreQuestions.bind(this);
    this.qModalDisplay = this.qModalDisplay.bind(this);
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
        console.log(orderedAnswers);
        this.setState({ questions: orderedAnswers, orgLength: receivedLength });
      });
  }

  submitSearch (searchPhrase) {
    const filterResults = [];
    if (searchPhrase === '') {
      this.setState({ filteredQuestions: this.state.questions });
    }

    if (searchPhrase.length < 3) {
      return;
    }

    this.state.questions.forEach((el) => {
      const lowerEl = el.question_body.toLowerCase();
      if (lowerEl.indexOf(searchPhrase) !== -1) {
        filterResults.push(el);
      }
    });
    this.setState({ filteredQuestions: filterResults, activeSearch: true });
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
      let sellerArray = [];
      for (const a in q.answers) {
        if (q.answers[a].answerer_name.toLowerCase() === 'seller') {
          sellerArray.push(q.answers[a]);
        } else {
          array.push(q.answers[a]);
        }
      }
      const finalOrder = array.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });
      const finalSellerOrder = sellerArray.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });
      q.answers = sellerArray.concat(finalOrder);
    }
    return questions;
  }

  displayMoreQuestions () {
    this.setState({ Qlength: this.state.Qlength + 2, qlDisplay: true });
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
    if (this.state.qModalStatus === true) {
      this.props.clickTracker('addQuestionClose');
    } else {
      this.props.clickTracker('addQuestionOpen');
    }
    this.setState({ qModalStatus: !this.state.qModalStatus });
  }

  aModalDisplay (qid) {
    if (this.state.aModalStatus === true) {
      this.props.clickTracker('addAnswerClose');
    } else {
      this.props.clickTracker('addAnswerOpen');
    }
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

        <div className='searchContainer'><SearchWithTracking submitSearch={this.submitSearch} /></div><br></br>

        <QuestionList
        questions={this.state.activeSearch ? this.state.filteredQuestions : this.state.questions}
        length={this.state.Qlength}
        displayMoreAnswers={this.displayMoreAnswers}
        likeAnswer={this.likeAnswer}
        likeQuestion={this.likeQuestion}
        reportQuestion={this.reportQuestion}
        reportAnswer={this.reportAnswer}
        aModalDisplay={this.aModalDisplay}
        qlDisplay={this.state.qlDisplay}
        />

        { this.state.questions.length > 2 && this.state.orgLength > this.state.Qlength && !this.state.activeSearch && <button className='btn' onClick={this.displayMoreQuestions} >More Answered Questions</button>
        }

        { this.state.filteredQuestions.length > 2 && this.state.filteredQuestions.length > this.state.Qlength && this.state.activeSearch && <button className='btn' onClick={this.displayMoreQuestions} >More Answered Questions</button>
        }
        <button className='btn' onClick={this.qModalDisplay} >Add A Question + </button>

        {this.state.qModalStatus === true && <QModalWithTracking submitQuestion={this.submitQuestion} qModalDisplay={this.qModalDisplay} />}

        {this.state.aModalStatus === true && <AModalWithTracking submitAnswer={this.submitAnswer} aModalDisplay={this.aModalDisplay} qid={this.state.question_id} />}
        </div>
    );
  }
}

export default QuestionsAnswers;
