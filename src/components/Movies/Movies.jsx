import React, { Component } from "react";
import Movie from "./Movie/Movie";

import styles from "./Movies.module.css";
export default class Movies extends Component {
  render() {
    const { movies = [] } = this.props;
    console.log(this.props);
    return (
      <div className={styles.movies}>
        {movies.length ? (
          movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
          <h4>Not found</h4>
        )}
      </div>
    );
  }
}
