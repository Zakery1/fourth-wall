import React, { useState, useEffect } from "react";

import MovieData from "../MovieData/MovieData";

// import MovieCoveredModal from "../../modal/MovieCovered";

import axios from "axios";

import "./MoviesCovered.scss";

function MoviesCovered() {
  const [allMovies, updateAllMovies] = useState([]);

  useEffect(() => {
    async function fetchAllMovies() {
      const response = await axios.get(
        `https://limitless-lowlands-38782.herokuapp.com/api/movie/all`
        // `http://localhost:8080/api/movie/all`
      );
      console.log(response.data);
      updateAllMovies(response.data);
    }
    fetchAllMovies();
  }, []);

  const movieList = allMovies.map((movie, i) => {
    // const episodes = movie.episodes.map((episode) => {
    //   return (
    //     <div key={episode.episodeName}>
    //       Season: {episode.seasonNumber} <br />
    //       Episode Title: {episode.episodeName}
    //     </div>
    //   );
    // });
    return (
      <div className="zg-movie" key={movie._id}>
        <div className="zg-movie-title">{movie.name}</div>
        <div>
        <MovieData movie={movie.name} />
        </div>

        {/* {episodes} */}
      </div>
    );
  });

  return (
    <div>
      <h2>Movies Discussed</h2>
      <div className="zg-movie-container">
        {/* <MovieCoveredModal /> */}

        {movieList}
      </div>
    </div>
  );
}

export default MoviesCovered;
