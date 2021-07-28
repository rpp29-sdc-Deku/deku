import React from 'react';
import List from './List.jsx';
class ListView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='reviewList'>
        <List />
        <button>More Reviews</button>
      </div>
    );
  }
}

export default ListView;
