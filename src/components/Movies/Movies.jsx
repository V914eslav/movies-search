import React, { Component } from "react";
import Movie from "./Movie/Movie";

export default class Movies extends Component {
  render() {
    const { movies } = this.props;
    console.log(this.props);
    return (
      <div className="movies">
        {movies.map((movie) => (
          <Movie key={movie.imdbID} {...movie} />
        ))}
      </div>
    );
  }
}
