import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isCounting: false,
    };
  }

  componentDidMount() {
    const prevCount = localStorage.getItem("timer");
    if (prevCount) {
      this.setState({
        count: +prevCount,
      });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("timer", this.state.count);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  handleStart = () => {
    this.setState({
      isCounting: true,
    });

    this.timerId = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  };

  handleStop = () => {
    this.setState({
      isCounting: false,
    });
    clearInterval(this.timerId);
  };
  handleReset = () => {
    this.setState({
      isCounting: false,
      count: 0,
    });
    clearInterval(this.timerId);
  };
  render() {
    return (
      <div className="app">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button onClick={this.handleStart}>start</button>
        ) : (
          <button onClick={this.handleStop}>stop</button>
        )}
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}
export default App;
