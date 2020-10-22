import React, { useState, useEffect } from "react";

import axios from "axios";

import "./MovieData.scss";

const MovieData = (props) => {
  const [movieData, updateMovieData] = useState([]);

  const {movie} = props;

  useEffect(() => {
    async function fetchMovieData() {
      const response = await axios.get(
        `http://www.omdbapi.com/?t=${movie}&apikey=a752c9de`
      );

      console.log("response.data", response.data)

      updateMovieData(response.data);
    }
    fetchMovieData();

  }, [movie]);

  //   const movies = movieData.map((movie) => {
  //     console.log("THIS MOVIE", movie);
  //     return <div>{movie.Title}</div>;
  //   });

  return <img src={movieData.Poster} alt={movieData.Title} />;
};

export default MovieData;
