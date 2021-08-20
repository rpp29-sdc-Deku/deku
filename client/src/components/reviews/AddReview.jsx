/* eslint-disable react/prop-types */
import React from 'react';
import postReview from '../../helpers/reviews/postReview.js';
import StarRating from './StarRating.jsx';
import AddDescription from './AddDescription.jsx';
class AddReview extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      product_id: this.props.product_id,
      recommend: null,
      characteristics: {},
      body: '',
      bodyRemaining: 50,
      summary: '',
      name: null,
      email: '',
      rating: null,
      file: [],
      thumbnail: ''
    };
    // this.description = this.description.bind(this);
  }

  description (e) {
    this.props.characteristics.forEach((item) => {
      if (item[e.target.name]) {
        const obj = this.state.characteristics;
        obj[item[e.target.name].id] = parseInt(e.target.value);
        this.setState({
          characteristics: obj
        }, () => console.log(this.state));
      }
    });
  }

  summary (e) {
    this.setState({
      summary: e.target.value
    });
  }

  body (e) {
    this.setState({
      body: e.target.value,
      bodyRemaining: 50 - e.target.value.length
    });
  }

  recommend (e) {
    this.setState({
      recommend: e.target.value === 'Yes'
    });
  }

  name (e) {
    this.setState({
      name: e.target.value
    });
  }

  email (e) {
    this.setState({
      email: e.target.value
    });
  }

  rating (rating) {
    this.setState({
      rating: rating
    });
  }

  sendData (e) {
    e.preventDefault();
    if (!this.formValidate()) {
      alert('You must enter the following: Any mandatory fields are blank, The review body is less than 50 characters, The email address provided is not in correct email format or The images selected are invalid or unable to be uploaded');
      return;
    };
    postReview(this.state).then((results) => {
      this.props.getProductDetails();
    });
  }

  upload (e) {
    const image = this.state.file;
    // eslint-disable-next-line new-cap
    image.push(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files[0]);
    this.setState({
      file: image
    }, () => console.log(this.state.file));
  }

  formValidate () {
    if (Object.keys(this.state.characteristics).length !== this.props.characteristics.length) {
      return false;
    }
    if (this.state.bodyRemaining > 0 || this.state.rating === null || this.state.recommended === null || this.state.name === null) {
      return false;
    }
    return true;
  }

  render () {
    return (
      <div className='reviewPop'>
       <div className='reviewPopUp'>
         <form onSubmit={this.sendData.bind(this)}>
           <div className='ReviewTitle'>
             <h1>Write Your Review</h1>
             <h3>About the [Product Name]</h3>
             <span onClick={this.props.addReview}>xxxx</span>
           </div>
            <div>
             rating - Manditory
           <StarRating rating={this.rating.bind(this)}/>
            </div>

           <div>
            <br></br>
              Recomend product - Manditory
            <label htmlFor='yes'>Yes</label>
            <input onChange={this.recommend.bind(this)} type='radio' id='yes' value='Yes' name='helpful'></input>
            <br></br>
            <label htmlFor='no'>No</label>
            <input onChange={this.recommend.bind(this)} type='radio' id='no' value='No' name='helpful'></input>
            <div className='radioReviews'>
              {this.props.characteristics.map((item, index) => {
                return <div className='reviewSpace' key={index}>
                  {Object.keys(item)}
                  {/* {this.setDescription(Object.keys(item)[0])} */}
                  <AddDescription name={Object.keys(item)[0]} description={this.description.bind(this)}/>
                </div>;
              })}
            </div>
            <div className='addReviewSummary'>
              <input type='text' maxLength='60' onChange={this.summary.bind(this)} placeholder='Example: Best purchase ever!'></input>
            </div>
            <div className='addReviewBody'>
              <textarea rows='7' cols='60' minLength='50' maxLength='1000' onChange={this.body.bind(this)} placeholder='Why did you like the product or not?'></textarea>
              <p>{this.state.bodyRemaining > 0 ? `Minimum required characters left: ${this.state.bodyRemaining}` : 'Minimum reached' }</p>
            </div>
            <div className='reviewNickName'>
              <input type='text' maxLength='60' onChange={this.name.bind(this)} placeholder='Example: Jackson11!'></input>
              <p>For privacy reasons, do not use your full name or email address</p>
            </div>
            <div className='reviewEmail'>
              <label htmlFor='email'>Email</label>
              <br></br>
              <input type='email' id='email' maxLength='60' onChange={this.email.bind(this)} placeholder='Example: jackson11@email.com' required></input>
              <p>For authentication reasons, you will not be emailed</p>
            </div>
            <div className='reviewFileUpload'>
            <input type='file' onChange={this.upload.bind(this)} name='image' accept='image/png, image/jpeg'></input>
            {this.state.file.map((photo) => {
              // eslint-disable-next-line react/jsx-key
              return <img src={photo} style={{ minHeight: '4vh', maxHeight: '4vh', maxWidth: '3vw' }}></img>;
            })}
            </div>
            <input type='submit' value='Submit'></input>
           </div>
         </form>
        </div>
      </div>);
  }
}

export default AddReview;
