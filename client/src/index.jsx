import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>HELLO WORLD! It's fetalicious!!</div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('App'));