import React from 'react';

class Question extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='Q'>
        <div className="Qblock">Q: </div>
        <div className="Ablock">A: </div>
      </div>
    );
  }
}

export default Question;
