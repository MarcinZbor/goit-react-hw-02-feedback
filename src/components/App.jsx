import React from 'react';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,

  };

onLeaveFeedback = type => {
  this.setState(prevState => ({
    [type]: prevState[type] + 1
  }))

}
countTotalFeedback = () => {
  const { good, neutral, bad} = this.state;
  return good + neutral + bad
}

countPositiveFeedbackPercentage = () => {
const {good} = this.state;
return good
}


  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={() => this.onLeaveFeedback('good')}>Good</button>
        <button type="button" onClick={() => this.onLeaveFeedback('neutral')}>Neutral</button>
        <button type="button" onClick={() => this.onLeaveFeedback('bad')}>Bad</button>
        <h2>Statistics: </h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()} </p>
        <p>Positive Feedback: {this.countPositiveFeedbackPercentage()} </p>
      
      </>
    );
  }
}

export default App;
