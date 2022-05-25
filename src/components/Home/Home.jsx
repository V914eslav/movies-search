import React, { Component } from "react";

import Movies from "../Movies/Movies";

// import styles from "./Home.module.css";

class Home extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=da61bb99&s=matrix")
      .then((res) => {
        return res.json();
      })
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="container content">
        {movies.length ? (
          <Movies movies={movies} />
        ) : (
          <>
            <h3>Lading...</h3>
          </>
        )}
      </div>
    );
  }
}

export default Home;
