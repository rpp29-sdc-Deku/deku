import React from 'react';
// import QuestionForm from './QuestionForm.jsx';

class QModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      name: '',
      email: ''
    };
  }

  submitQuestion (e) {
    e.preventDefault();
    this.props.submitQuestion(this.state);
  }

  formInput (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render () {
    return (
      <div className='modalContainer'>
      <div className='modalContent'>
        <button id='qModalClose' className='wordbtn' onClick={this.props.qModalDisplay}>Close</button>
        <form>
          <label htmlFor='body' >question: </label>
          <input type='text' name='body' onChange={this.formInput.bind(this)} ></input><br></br><br></br>
          <label htmlFor='name' >name: </label>
          <input type='text' name='name' onChange={this.formInput.bind(this)}></input><br></br>
          <label htmlFor='email' >email: </label>
          <input type='text' name='email' onChange={this.formInput.bind(this)}></input><br></br>
          <input type='submit' className='wordbtn' onClick={this.submitQuestion.bind(this)} />
        </form>
      </div>
    </div>
    );
  };
};

export default QModal;
