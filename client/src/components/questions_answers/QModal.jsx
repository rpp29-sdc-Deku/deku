import React from 'react';

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
    this.props.clickTracker('submitQuestion');
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

        <div className='modalTitle'>Ask Your Question</div>
        <div className='modalSubTitle'>About the {}</div><br/>

        <form>
          <label className='qaLabel' htmlFor='body' >Your Question (mandatory)</label><br/>
          <textarea className='qaTextarea' type='text' name='body' onChange={this.formInput.bind(this)} ></textarea><br/><br/>

          <label className='qaLabel' htmlFor='name' >What is your nickname (mandatory)</label><br/>
          <div>For privacy reasons, do not use your full name or email address” will appear.</div>
          <input className='qaInput' type='text' name='name' placeholder='Example: jackson11!' onChange={this.formInput.bind(this)}></input><br/><br/>

          <label className='qaLabel' htmlFor='email' >Your Email (mandatory)</label>
          <div>For authentication reasons, you will not be emailed</div>
          <input className='qaInput' type='text' name='email' placeholder='Example: jack@email.com' onChange={this.formInput.bind(this)}></input><br/><br/>

          <input type='submit' className='wordbtn' onClick={this.submitQuestion.bind(this)} />
        </form>

      </div>
    </div>
    );
  };
};

export default QModal;
