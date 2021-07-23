import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/product_overview/Overview.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import Related from './components/related_products/Related.jsx';
import Questions from './components/questions_answers/Questions.jsx';
import '../dist/styles/product_overview.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
      <div>HELLO WORLD! It's fetalicious!!</div>

      <Overview />
      <Related />
      <Questions />
      <Reviews />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('App'));

export default App;
