import React from "react";

import styles from "./Movie.module.css";
import cn from "classnames";

const Movie = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props;

  return (
    <div className={cn("card", styles.movie)} id={imdbID}>
      <div className="card-image waves-effect waves-block waves-light">
        {Poster === "N/A" ? (
          <img
            className={cn("activator", styles.img)}
            src={`https://via.placeholder.com/300x400?text=${Title}`}
            alt={Title}
          />
        ) : (
          <img
            className={cn("activator", styles.img)}
            src={Poster}
            alt={Title}
          />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {Title}
        </span>
        <p>
          {Year}
          <span>{Type}</span>
        </p>
      </div>
    </div>
  );
};

export default Movie;
