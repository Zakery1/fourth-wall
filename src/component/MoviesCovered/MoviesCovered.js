import React, { useState, useEffect } from "react";

import axios from "axios";

import "./MoviesCovered.scss";

function MoviesCovered() {
  const [allMovies, updateAllMovies] = useState([]);

  useEffect(() => {
    async function fetchAllMovies() {
      const response = await axios.get(
        // `https://limitless-lowlands-38782.herokuapp.com/api/movie/all`
        `http://localhost:8080/api/movie/all`
      );
      updateAllMovies(response.data);
    }
    fetchAllMovies();
  });

  const movieList = allMovies.map((movie, i) => {
    const episodes = movie.episodes.map((episode) => {
      return <div>{episode.episodeName}</div>;
    });

    console.log("movie", movie);
    return (
      <div className="zg-movie zg-movie-title" key={movie._id}>
        {episodes}
        <p>Second part</p>
      </div>
    );
  });

  return (
    <div className="zg-movie-container">
      <h2>Movies Discussed</h2>
      <div className="zg-movie">
        TestMovieName
        <p>Second part</p>
      </div>
      {movieList}
    </div>
  );
}

export default MoviesCovered;
