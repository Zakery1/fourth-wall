import React, { useState, useEffect } from "react";

import MovieData from "../MovieData/MovieData";

import axios from "axios";

import spinner from "../../asset/spinner.gif";

import "./MoviesCovered.scss";

function MoviesCovered() {
  const [allMovies, updateAllMovies] = useState([]);

  useEffect(() => {
    async function fetchAllMovies() {
      const response = await axios.get(
        `https://limitless-lowlands-38782.herokuapp.com/api/movie/all`
        // `http://localhost:8080/api/movie/all`
      );
      updateAllMovies(response.data);
    }
    fetchAllMovies();
  }, []);

  const movieList = allMovies.map((movie) => {
    return (
      <div className="zg-movie" key={movie._id}>
        <MovieData movie={movie} />
      </div>
    );
  });

  return (
    <div>
      <h2 className="zg-movies-covered-header">Movies Discussed</h2>

      <div className="zg-movie-container">
        {allMovies.length > 0 ? movieList : <img src={spinner} alt="loading" />}
      </div>
    </div>
  );
}

export default MoviesCovered;
