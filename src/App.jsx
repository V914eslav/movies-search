import React, { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <div className="app">
        <Form />
      </div>
    );
  }
}
export default App;
