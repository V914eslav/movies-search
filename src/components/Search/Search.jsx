import React, { Component } from "react";

import cn from "classnames";
import styles from "./Search.module.css";

export default class Search extends Component {
  state = {
    search: "",
  };
  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
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
              onKeyDown={this.handleKey}
            />
            <button
              className={cn("btn", styles.btn)}
              onClick={() => this.props.searchMovies(this.state.search)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}
