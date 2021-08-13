import React from 'react';

class AModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      body: '',
      name: '',
      email: '',
      photos: []
    };
  }

  submitAnswer (e) {
    e.preventDefault();
    this.props.clickTracker('submitAnswer');
    const formOutput = {
      ...this.state,
      ...this.props
    };
    this.props.submitAnswer(formOutput);
  }

  formInput (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render () {
    return (
      <div className='modalContainer'>
        <div className='modalContent'>
          <button id='aModalClose' className='wordbtn' onClick={this.props.aModalDisplay}>Close</button>
          <div className='modalTitle'>Submit Answer</div>
          <div className='modalSubTitle'>{}: {}</div><br/>

          <form>
            <label htmlFor='body' >Your Answer (mandatory)</label>
            <textarea type='text' name='body' onChange={this.formInput.bind(this)}></textarea><br/><br/>

            <label htmlFor='name' >What is your nickname (mandatory)</label><br/>
            <div>For privacy reasons, do not use your full name or email address” will appear.</div>
            <input type='text' name='name' placeholder='Example: jack543!'onChange={this.formInput.bind(this)}></input><br/><br/>

            <label htmlFor='email' >Your Email (mandatory)</label>
            <div>For authentication reasons, you will not be emailed</div><br/>
            <input type='text' name='email' placeholder='Example: jack@email.com' onChange={this.formInput.bind(this)}></input><br/><br/>

            {/* <label htmlFor='images' >images: </label>
            <input type='text' name='images' onChange={this.formInput.bind(this)}></input><br></br> */}

            <input type='submit' className='wordbtn' onClick={this.submitAnswer.bind(this)} />
          </form>

        </div>
    </div>
    );
  };
};

export default AModal;
