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
        <div id='Qtitle'>QUESTIONS AND ANSWERS</div><br></br>
        <form id='Qsearch'>
        <input id='searchbar' type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'></input>
        <button type='submit' id='searchbtn' >Search</button>
        </form><br></br>
        <QuestionList questions={this.state.initial} />
        <button className='btn' >More Answered Questions</button>
        <button className='btn' >Add A Question + </button>

        </div>
    );
  }
}

export default QuestionsAnswers;
