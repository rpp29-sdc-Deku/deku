/* eslint-disable react/prop-types */
import React from 'react';

class AddReview extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      helpful: ''
    };
  }

  setDescription (description) {
    if (description === 'Size') {
      return (<div className='reviewRadio'>
        <div className='radios'>
          <label htmlFor='sizeSmall'>A size to small</label>
          <input type='radio' id='sizeSmall' name='size' value='1'></input>
        </div>
        <div className='radios'>
          <label htmlFor='small'>1/2 size to small</label>
          <input type='radio' id='small' name='size' value='2'></input>
        </div>
        <div className='radios'>
          <label htmlFor='perfect'>Perfect</label>
          <input type='radio' id='sizeSmall' name='size' value='3'></input>
        </div>
        <div className='radios'>
          <label htmlFor='sizeBig'>1/2 size to big</label>
          <input type='radio' id='sizeBig' name='size' value='4'></input>
        </div>
        <div className='radios'>
          <label htmlFor='wide'>A size to wide</label>
          <input type='radio' id='wide' name='size' value='5'></input>
        </div>
      </div>);
    }
    if (description === 'Comfort') {
      return (<div className='reviewRadio'>
        <div className='radios'>
          <label htmlFor='uncomfortable'>Uncomfortable</label>
          <input type='radio' id='uncomfortable' name='comfort' value='1'></input>
        </div>
        <div className='radios'>
          <label htmlFor='sligthlyUncomfortable'>Sligthly Uncomfortable</label>
          <input type='radio' id='sligthlyUncomfortable' name='comfort' value='2'></input>
        </div>
        <div className='radios'>
          <label htmlFor='ok'>Ok</label>
          <input type='radio' id='ok' name='comfort' value='3'></input>
        </div>
        <div className='radios'>
          <label htmlFor='comfortable'>Comfortable</label>
          <input type='radio' id='comfortable' name='comfort' value='4'></input>
        </div>
        <div className='radios'>
          <label htmlFor='comfortPerfect'>Perfect</label>
          <input type='radio' id='comfortPerfect' name='comfort' value='5'></input>
        </div>
      </div>);
    }
    if (description === 'Length') {
      return (<div className='reviewRadio'>
        <div className='radios'>
          <label htmlFor='short'>Runs Short</label>
          <input type='radio' id='short' name='length' value='1'></input>
        </div>
        <div className='radios'>
          <label htmlFor='slightlyShort'>Runs slightly Short</label>
          <input type='radio' id='slightlyShort' name='length' value='2'></input>
        </div>
        <div className='radios'>
          <label htmlFor='lengthPerfect'>Perfect</label>
          <input type='radio' id='lengthPerfect' name='length' value='3'></input>
        </div>
        <div className='radios'>
          <label htmlFor='slightlyLong'>Runs slightly long</label>
          <input type='radio' id='sligthlyLong' name='length' value='4'></input>
        </div>
        <div className='radios'>
          <label htmlFor='lengthLong'>Runs Long</label>
          <input type='radio' id='lengthLong' name='length' value='5'></input>
        </div>
      </div>);
    }
    if (description === 'Fit') {
      return (<div className='reviewRadio'>
        <div className='radios'>
          <label htmlFor='tight'>Runs tight</label>
          <input type='radio' id='tight' name='fit' value='1'></input>
        </div>
        <div className='radios'>
          <label htmlFor='slightlyTight'>Rungs slightly tight</label>
          <input type='radio' id='slightlyTight' name='fit' value='2'></input>
        </div>
        <div className='radios'>
          <label htmlFor='fitPerfect'>Perfect</label>
          <input type='radio' id='fitPerfect' name='fit' value='3'></input>
        </div>
        <div className='radios'>
          <label htmlFor='fitLong'>Runs slightly long</label>
          <input type='radio' id='fitLong' name='fit' value='4'></input>
        </div>
        <div className='radios'>
          <label htmlFor='fitLonger'>Runs Long</label>
          <input type='radio' id='fitLonger' name='fit' value='5'></input>
        </div>
      </div>);
    }
    if (description === 'Quality') {
      return (<div className='reviewRadio'>
        <div className='radios'>
          <label htmlFor='poor'>Poor</label>
          <input type='radio' id='poor' name='quality' value='1'></input>
        </div>
        <div className='radios'>
          <label htmlFor='belowAverage'>Below Average</label>
          <input type='radio' id='belowAverage' name='quality' value='2'></input>
        </div>
        <div className='radios'>
         <label htmlFor='expected'>What I expected</label>
         <input type='radio' id='expected' name='quality' value='3'></input>
        </div>
        <div className='radios'>
          <label htmlFor='great'>Pretty Great</label>
          <input type='radio' id='great' name='quality' value='4'></input>
        </div>
        <div className='radios'>
          <label htmlFor='qualityPerfect'>Perfect</label>
          <input type='radio' id='qualityPerfect' name='quality' value='5'></input>
        </div>
      </div>);
    }
    if (description === 'Width') {
      return (<div className='reviewRadio'>
        <div className='radios'>
          <label htmlFor='tooNarrow'>Too Narrow</label>
          <input type='radio' id='tooNarrow' name='width' value='1'></input>
        </div>
        <div className='radios'>
          <label htmlFor='slightlyNarrow'>Slightly Narrow</label>
          <input type='radio' id='slightlyNarrow' name='width' value='2'></input>
        </div>
        <div className='radios'>
          <label htmlFor='widthPerfect'>Perfect</label>
          <input type='radio' id='widthPerfect' name='width' value='3'></input>
        </div>
        <div className='radios'>
          <label htmlFor='sligthlyWide'>Sligthly Wide</label>
          <input type='radio' id='sligthlyWide' name='width' value='4'></input>
        </div>
        <div className='radios'>
          <label htmlFor='tooWide'>Too Wide</label>
          <input type='radio' id='tooWide' name='width' value='5'></input>
        </div>
      </div>);
    }
  }

  helpful (e) {
    this.setState({
      helpful: e.target.value
    });
  }

  render () {
    return (
      <div className='reviewPop'>
       <div className='reviewPopUp'>
         <form>
           <label htmlFor='Testing'>Rating</label>
           <input type='range' id='Testing'></input>
           <div onChange={this.helpful.bind(this)}>
            <br></br>
            <label htmlFor='yes'>Yes</label>
            <input type='radio' id='yes' value='Yes' name='helpful'></input>
            <br></br>
            <label htmlFor='no'>No</label>
            <input type='radio' id='no' value='No' name='helpful'></input>
            <div className='radioReviews'>
              {this.props.characteristics.map((item, index) => {
                return <div key={index}>
                  {Object.keys(item)}
                  {this.setDescription(Object.keys(item)[0])}
                </div>;
              })}
            </div>
            <div className='addReviewBody'>
              <input type='text' maxLength='60' placeholder='Example: Best purchase ever!'></input>
            </div>
            <div className='addReviewSummary'>
              <textarea rows='7' cols='60' placeholder='Why did you like the product or not?'></textarea>
            </div>
            <div className='reviewNickName'>
              <input type='text' maxLength='60' placeholder='Example: Jackson11!'></input>
            </div>
            <div className='reviewEmail'>
              <label htmlFor='email'>Email</label>
              <br></br>
              <input type='email' id='email' placeholder='Example: jackson11@email.com'></input>
            </div>
            <input type='submit' value='Submit'></input>
           </div>
         </form>
        </div>
      </div>);
  }
}

export default AddReview;
