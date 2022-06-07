import React, { Component, useState, useEffect } from "react";

import Movies from "../Movies/Movies";
import Preloader from "../Preloader";
import Search from "../Search";

const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data.Search), setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data.Search), setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container content">
      <Search searchMovies={searchMovies} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </div>
  );
};

export default Home;
