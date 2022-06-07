import React, { useState } from "react";

import cn from "classnames";
import styles from "./Search.module.css";

const Search = ({ searchMovies = Function.prototype }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };
  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, );
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field ">
          <input
            className="validate"
            placeholder="search"
            id="email_inline"
            type="email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />
          <button
            className={cn("btn", styles.btn)}
            onClick={() => searchMovies(search, type)}
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
                onChange={handleFilter}
                checked={type === "all"}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className={cn("with-gap", styles.radioBtn)}
                name="type"
                type="radio"
                data-type="movie"
                onChange={handleFilter}
                checked={type === "movie"}
              />
              <span>Movies</span>
            </label>
            <label>
              <input
                className={cn("with-gap", styles.radioBtn)}
                name="type"
                type="radio"
                data-type="series"
                onChange={handleFilter}
                checked={type === "series"}
              />
              <span>Series</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
