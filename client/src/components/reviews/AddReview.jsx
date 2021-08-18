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
      helpful: '',
      characteristics: {},
      body: '',
      summary: '',
      name: '',
      email: '',
      rating: 0,
      file: [],
      thumbnail: ''
    };
    // this.description = this.description.bind(this);
  }

  description (e) {
    this.props.characteristics.forEach((item) => {
      if (item[e.target.name]) {
        const obj = this.state.characteristics;
        obj[item[e.target.name].id] = e.target.value;
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
      body: e.target.value
    });
  }

  helpful (e) {
    console.log('hi');
    this.setState({
      helpful: e.target.value
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

  rating (e) {
    console.log(e.target.value);
    this.setState({
      rating: e.target.value
    });
  }

  sendData (e) {
    e.preventDefault();
    postReview(this.state);
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

  render () {
    return (
      <div className='reviewPop'>
       <div className='reviewPopUp'>
         <form onSubmit={this.sendData.bind(this)}>
            <div>

           <StarRating/>
            </div>

           <div>
            <br></br>
            <label htmlFor='yes'>Yes</label>
            <input onChange={this.helpful.bind(this)} type='radio' id='yes' value='Yes' name='helpful'></input>
            <br></br>
            <label htmlFor='no'>No</label>
            <input onChange={this.helpful.bind(this)} type='radio' id='no' value='No' name='helpful'></input>
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
              <textarea rows='7' cols='60' onChange={this.body.bind(this)} placeholder='Why did you like the product or not?'></textarea>
            </div>
            <div className='reviewNickName'>
              <input type='text' maxLength='60' onChange={this.name.bind(this)} placeholder='Example: Jackson11!'></input>
            </div>
            <div className='reviewEmail'>
              <label htmlFor='email'>Email</label>
              <br></br>
              <input type='email' id='email' onChange={this.email.bind(this)} placeholder='Example: jackson11@email.com'></input>
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
