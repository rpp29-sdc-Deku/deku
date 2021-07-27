import React from 'react';

class ListView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='reviewList'>
        <div className='reviewTile'>
          <div className='reviewStarRaiting'></div>
          <div className='reviewTitle'></div>
          <div className='reviewSummary'></div>
          <div className='reviewHelpful'></div>
          <div className='reviewResponse'></div>
        </div>
        <button>More Reviews</button>
      </div>
    );
  }
}

export default ListView;
