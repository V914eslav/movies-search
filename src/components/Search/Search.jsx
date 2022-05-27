import React, { Component } from "react";

import cn from "classnames";
import styles from "./Search.module.css";

export default class Search extends Component {
  state = {
    search: "",
    type: "all",
  };
  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  handleFilter = (e) => {
    this.setState(
      () => ({
        type: e.target.dataset.type,
      }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
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
              onClick={() =>
                this.props.searchMovies(this.state.search, this.state.type)
              }
            >
              Search
            </button>
            <div className="radioButtons">
              <label>
                <input
                  className={cn("with-gap", styles.radioBtn)}
                  name="type"
                  type="radio"
                  data-type="all"
                  onChange={this.handleFilter}
                  checked={this.state.type === "all"}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  className={cn("with-gap", styles.radioBtn)}
                  name="type"
                  type="radio"
                  data-type="movie"
                  onChange={this.handleFilter}
                  checked={this.state.type === "movie"}
                />
                <span>Movies</span>
              </label>
              <label>
                <input
                  className={cn("with-gap", styles.radioBtn)}
                  name="type"
                  type="radio"
                  data-type="series"
                  onChange={this.handleFilter}
                  checked={this.state.type === "series"}
                />
                <span>Series</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
