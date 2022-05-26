import React, { Component } from "react";

export default class Search extends Component {
  state = {
    search: "",
  };
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field ">
            <input
              className="validate"
              placeholder="search"
              id="email_inline"
              type="email"
              value={this.state.search}
              onChange={(e) =>
                this.setState({
                  search: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
