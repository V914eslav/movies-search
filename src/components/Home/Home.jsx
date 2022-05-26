import React, { Component } from "react";

import Movies from "../Movies/Movies";
import Preloader from "../Preloader";
import Search from "../Search";

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
        <Search />
        {movies.length ? (
          <Movies movies={movies} />
        ) : (
          <>
            <Preloader />
          </>
        )}
      </div>
    );
  }
}

export default Home;
