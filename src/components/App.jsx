import React from 'react';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // total: 0,
    // positiveFeedback: 0

  };

onLeaveFeedback = type => {
  this.setState(prevState => ({
    [type]: prevState[type] + 1
  }))

}
// countTotalFeedback()
// countPositiveFeedbackPercentage()


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
      
      </>
    );
  }
}

export default App;
