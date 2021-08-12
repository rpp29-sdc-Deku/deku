/* eslint-disable react/prop-types */
import React from 'react';
import postReview from '../../helpers/reviews/postReview.js';
class AddReview extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      product_id: 29000,
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

  setDescription (description) {
    if (description === 'Size') {
      return (<div onChange={this.description.bind(this)} className='reviewRadio'>
        <div className='radios'>
          <label htmlFor='sizeSmall'>A size to small</label>
          <input type='radio' id='sizeSmall' name='Size' value='1'></input>
        </div>
        <div className='radios'>
          <label htmlFor='small'>1/2 size to small</label>
          <input type='radio' id='small' name='Size' value='2'></input>
        </div>
        <div className='radios'>
          <label htmlFor='perfect'>Perfect</label>
          <input type='radio' id='sizeSmall' name='Size' value='3'></input>
        </div>
        <div className='radios'>
          <label htmlFor='sizeBig'>1/2 size to big</label>
          <input type='radio' id='sizeBig' name='Size' value='4'></input>
        </div>
        <div className='radios'>
          <label htmlFor='wide'>A size to wide</label>
          <input type='radio' id='wide' name='Size' value='5'></input>
        </div>
      </div>);
    }
    if (description === 'Comfort') {
      return (<div onChange={this.description.bind(this)} className='reviewRadio'>
        <div className='radios'>
          <label htmlFor='uncomfortable'>Uncomfortable</label>
          <input type='radio' id='uncomfortable' name='Comfort' value='1'></input>
        </div>
        <div className='radios'>
          <label htmlFor='sligthlyUncomfortable'>Sligthly Uncomfortable</label>
          <input type='radio' id='sligthlyUncomfortable' name='Comfort' value='2'></input>
        </div>
        <div className='radios'>
          <label htmlFor='ok'>Ok</label>
          <input type='radio' id='ok' name='Comfort' value='3'></input>
        </div>
        <div className='radios'>
          <label htmlFor='comfortable'>Comfortable</label>
          <input type='radio' id='comfortable' name='Comfort' value='4'></input>
        </div>
        <div className='radios'>
          <label htmlFor='comfortPerfect'>Perfect</label>
          <input type='radio' id='comfortPerfect' name='Comfort' value='5'></input>
        </div>
      </div>);
    }
    if (description === 'Length') {
      return (<div onChange={this.description.bind(this)} className='reviewRadio'>
        <div className='radios'>
          <label htmlFor='short'>Runs Short</label>
          <input type='radio' id='short' name='Length' value='1'></input>
        </div>
        <div className='radios'>
          <label htmlFor='slightlyShort'>Runs slightly Short</label>
          <input type='radio' id='slightlyShort' name='Length' value='2'></input>
        </div>
        <div className='radios'>
          <label htmlFor='lengthPerfect'>Perfect</label>
          <input type='radio' id='lengthPerfect' name='Length' value='3'></input>
        </div>
        <div className='radios'>
          <label htmlFor='slightlyLong'>Runs slightly long</label>
          <input type='radio' id='sligthlyLong' name='Length' value='4'></input>
        </div>
        <div className='radios'>
          <label htmlFor='lengthLong'>Runs Long</label>
          <input type='radio' id='lengthLong' name='Length' value='5'></input>
        </div>
      </div>);
    }
    if (description === 'Fit') {
      return (<div onChange={this.description.bind(this)} className='reviewRadio'>
        <div className='radios'>
          <label htmlFor='tight'>Runs tight</label>
          <input type='radio' id='tight' name='Fit' value='1'></input>
        </div>
        <div className='radios'>
          <label htmlFor='slightlyTight'>Rungs slightly tight</label>
          <input type='radio' id='slightlyTight' name='Fit' value='2'></input>
        </div>
        <div className='radios'>
          <label htmlFor='fitPerfect'>Perfect</label>
          <input type='radio' id='fitPerfect' name='Fit' value='3'></input>
        </div>
        <div className='radios'>
          <label htmlFor='fitLong'>Runs slightly long</label>
          <input type='radio' id='fitLong' name='Fit' value='4'></input>
        </div>
        <div className='radios'>
          <label htmlFor='fitLonger'>Runs Long</label>
          <input type='radio' id='fitLonger' name='Fit' value='5'></input>
        </div>
      </div>);
    }
    if (description === 'Quality') {
      return (<div onChange={this.description.bind(this)} className='reviewRadio'>
        <div className='radios'>
          <label htmlFor='poor'>Poor</label>
          <input type='radio' id='poor' name='Quality' value='1'></input>
        </div>
        <div className='radios'>
          <label htmlFor='belowAverage'>Below Average</label>
          <input type='radio' id='belowAverage' name='Quality' value='2'></input>
        </div>
        <div className='radios'>
         <label htmlFor='expected'>What I expected</label>
         <input type='radio' id='expected' name='Quality' value='3'></input>
        </div>
        <div className='radios'>
          <label htmlFor='great'>Pretty Great</label>
          <input type='radio' id='great' name='Quality' value='4'></input>
        </div>
        <div className='radios'>
          <label htmlFor='qualityPerfect'>Perfect</label>
          <input type='radio' id='qualityPerfect' name='Quality' value='5'></input>
        </div>
      </div>);
    }
    if (description === 'Width') {
      return (<div onChange={this.description.bind(this)} className='reviewRadio'>
        <div className='radios'>
          <label htmlFor='tooNarrow'>Too Narrow</label>
          <input type='radio' id='tooNarrow' name='Width' value='1'></input>
        </div>
        <div className='radios'>
          <label htmlFor='slightlyNarrow'>Slightly Narrow</label>
          <input type='radio' id='slightlyNarrow' name='Width' value='2'></input>
        </div>
        <div className='radios'>
          <label htmlFor='widthPerfect'>Perfect</label>
          <input type='radio' id='widthPerfect' name='Width' value='3'></input>
        </div>
        <div className='radios'>
          <label htmlFor='sligthlyWide'>Sligthly Wide</label>
          <input type='radio' id='sligthlyWide' name='Width' value='4'></input>
        </div>
        <div className='radios'>
          <label htmlFor='tooWide'>Too Wide</label>
          <input type='radio' id='tooWide' name='Width' value='5'></input>
        </div>
      </div>);
    }
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
           <label htmlFor='Testing'>Rating</label>
           <input type='range' min='1' max='5' onChange={this.rating.bind(this)} step='0.5' id='Testing'></input>
           <div>
            <br></br>
            <label htmlFor='yes'>Yes</label>
            <input onChange={this.helpful.bind(this)} type='radio' id='yes' value='Yes' name='helpful'></input>
            <br></br>
            <label htmlFor='no'>No</label>
            <input onChange={this.helpful.bind(this)} type='radio' id='no' value='No' name='helpful'></input>
            <div className='radioReviews'>
              {this.props.characteristics.map((item, index) => {
                return <div key={index}>
                  {Object.keys(item)}
                  {this.setDescription(Object.keys(item)[0])}
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
