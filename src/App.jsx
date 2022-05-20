import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.dicrement = this.dicrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  dicrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  reset() {
    this.setState({
      count: 0,
    });
  }
  render() {
    return (
      <div className="App">
        <button
          onClick={this.dicrement}
          style={{ display: "inline-block", margin: "0 10px" }}
        >
          -
        </button>
        <p style={{ display: "inline-block", margin: "0 10px" }}>
          {this.state.count}
        </p>

        <button
          onClick={this.increment}
          style={{ display: "inline-block", margin: "0 10px" }}
        >
          +
        </button>
        <button
          onClick={this.reset}
          style={{ display: "inline-block", margin: "0 10px" }}
        >
          reset
        </button>
      </div>
    );
  }
}

export default App;
