import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/product_overview/Overview.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import RelatedProducts from './components/related_products/RelatedProducts.jsx';
import QuestionsAnswers from './components/questions_answers/QuestionsAnswers.jsx';
import '../dist/styles/product_overview.css';
import getReviews from './helpers/serverReview.js';
class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: 28212,
      value: ''
    };
  }

  onChange (e) {
    this.setState({ value: e.target.value });
  }

  render () {
    return (
      <div>
        <div id="logo">
          <div>
            <b><u>LOGO</u></b>
          </div>
          <div id="search">
            <input type="text" onChange={this.onChange.bind(this)}></input>
          </div>
        </div>
        <Overview productId={this.state.id} />
        <RelatedProducts />
        <QuestionsAnswers id={this.state.id} />
        <Reviews getReviews={getReviews}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('App'));

export default App;
