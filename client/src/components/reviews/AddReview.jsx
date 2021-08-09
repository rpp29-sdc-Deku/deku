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
      return (<div>
        <label htmlFor='sizeSmall'>A size to small</label>
        <input type='radio' id='sizeSmall' name='size' value='1'></input>
        <label htmlFor='small'>1/2 size to small</label>
        <input type='radio' id='small' name='size' value='2'></input>
        <label htmlFor='perfect'>Perfect</label>
        <input type='radio' id='sizeSmall' name='size' value='3'></input>
        <label htmlFor='sizeBig'>1/2 size to big</label>
        <input type='radio' id='sizeBig' name='size' value='4'></input>
        <label htmlFor='wide'>A size to wide</label>
        <input type='radio' id='wide' name='size' value='5'></input>
      </div>);
    }
    if (description === 'Comfort') {
      return (<div>
        <label htmlFor='uncomfortable'>Uncomfortable</label>
        <input type='radio' id='uncomfortable' name='comfort' value='1'></input>
        <label htmlFor='sligthlyUncomfortable'>Sligthly Uncomfortable</label>
        <input type='radio' id='sligthlyUncomfortable' name='comfort' value='2'></input>
        <label htmlFor='ok'>Ok</label>
        <input type='radio' id='ok' name='comfort' value='3'></input>
        <label htmlFor='comfortable'>Comfortable</label>
        <input type='radio' id='comfortable' name='comfort' value='4'></input>
        <label htmlFor='comfortPerfect'>Perfect</label>
        <input type='radio' id='comfortPerfect' name='comfort' value='5'></input>
      </div>);
    }
    if (description === 'Length') {
      return (<div>
        <label htmlFor='short'>Runs Short</label>
        <input type='radio' id='short' name='length' value='1'></input>
        <label htmlFor='slightlyShort'>Runs slightly Short</label>
        <input type='radio' id='slightlyShort' name='length' value='2'></input>
        <label htmlFor='lengthPerfect'>Perfect</label>
        <input type='radio' id='lengthPerfect' name='length' value='3'></input>
        <label htmlFor='slightlyLong'>Runs slightly long</label>
        <input type='radio' id='sligthlyLong' name='length' value='4'></input>
        <label htmlFor='lengthLong'>Runs Long</label>
        <input type='radio' id='lengthLong' name='length' value='5'></input>
      </div>);
    }
    if (description === 'Fit') {
      return (<div>
        <label htmlFor='tight'>Runs tight</label>
        <input type='radio' id='tight' name='fit' value='1'></input>
        <label htmlFor='slightlyTight'>Rungs slightly tight</label>
        <input type='radio' id='slightlyTight' name='fit' value='2'></input>
        <label htmlFor='fitPerfect'>Perfect</label>
        <input type='radio' id='fitPerfect' name='fit' value='3'></input>
        <label htmlFor='fitLong'>Runs slightly long</label>
        <input type='radio' id='fitLong' name='fit' value='4'></input>
        <label htmlFor='fitLonger'>Runs Long</label>
        <input type='radio' id='fitLonger' name='fit' value='5'></input>
      </div>);
    }
    if (description === 'Quality') {
      return (<div>
        <label htmlFor='poor'>Poor</label>
        <input type='radio' id='poor' name='quality' value='1'></input>
        <label htmlFor='belowAverage'>Below Average</label>
        <input type='radio' id='belowAverage' name='quality' value='2'></input>
        <label htmlFor='expected'>What I expected</label>
        <input type='radio' id='expected' name='quality' value='3'></input>
        <label htmlFor='great'>Pretty Great</label>
        <input type='radio' id='great' name='quality' value='4'></input>
        <label htmlFor='qualityPerfect'>Perfect</label>
        <input type='radio' id='qualityPerfect' name='quality' value='5'></input>
      </div>);
    }
    if (description === 'Width') {
      return (<div>
        <label htmlFor='tooNarrow'>Too Narrow</label>
        <input type='radio' id='tooNarrow' name='width' value='1'></input>
        <label htmlFor='slightlyNarrow'>Slightly Narrow</label>
        <input type='radio' id='slightlyNarrow' name='width' value='2'></input>
        <label htmlFor='widthPerfect'>Perfect</label>
        <input type='radio' id='widthPerfect' name='width' value='3'></input>
        <label htmlFor='sligthlyWide'>Sligthly Wide</label>
        <input type='radio' id='sligthlyWide' name='width' value='4'></input>
        <label htmlFor='tooWide'>Too Wide</label>
        <input type='radio' id='tooWide' name='width' value='5'></input>
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
            {this.props.characteristics.map((item, index) => {
              return <div key={index}>
                {Object.keys(item)}
                {this.setDescription(Object.keys(item)[0])}
              </div>;
            })}
           </div>
         </form>
        </div>
      </div>);
  }
}

export default AddReview;
