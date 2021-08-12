import React from 'react';
import axios from 'axios';

function withClickTrackingQA (WrappedComponent) {
  return class ClickTracking extends React.Component {
    clickTracker (el) {
      console.log('BIG BROTHER IS WATCHING ', el, new Date().toLocaleString());
      const currentDate = new Date().toLocaleString();
      const url = window.location.href;
      axios.post(`${url}atelier/logInteraction`, {
        element: el,
        widget: 'Questions and Answers',
        time: currentDate
      });
    }

    render () {
      return <WrappedComponent { ...this.props } clickTracker={ this.clickTracker } />;
    }
  };
}

export default withClickTrackingQA;
