import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/product_overview/Overview.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import RelatedLists from './components/related_products/RelatedLists.jsx';
import QuestionsAnswers from './components/questions_answers/QuestionsAnswers.jsx';
import '../dist/styles/product_overview.css';
import getReviews from './helpers/reviews/serverReview.js';
import getMeta from './helpers/reviews/meta.js';
import withClickTrackingQA from './components/questions_answers/withClickTrackingQA.jsx';
const QuestionsAnswersWithClickTracking = withClickTrackingQA(QuestionsAnswers);

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: 28212,
      value: '',
      starValue: 0
    };
  }

  onChange (e) {
    this.setState({ value: e.target.value });
  }

  setStars (value) {
    this.setState({
      starValue: value
    });
  }

  render () {
    return (
      <div>
        <div id="logo">
          <div>
            <b><u>Logo</u></b>
          </div>
          <div id="search">
            <input type="text" onChange={this.onChange.bind(this)}></input>
          </div>
        </div>
        <Overview productId={this.state.id} />
        <RelatedLists masterId={this.state.id} />
        <QuestionsAnswersWithClickTracking id={this.state.id} />
        <Reviews getReviews={getReviews} getMeta={getMeta} setStars={this.setStars.bind(this)} starsValue={this.state.starValue}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('App'));

export default App;
