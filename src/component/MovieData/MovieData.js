import React, { useState, useEffect } from "react";

import axios from "axios";

import "./MovieData.scss";

const MovieData = (props) => {
  const [movieData, updateMovieData] = useState([]);

  async function fetMovieData() {
    const response = await axios.get(
      `http://www.omdbapi.com/?t=${props.movie}&apikey=a752c9de`
    );

    updateMovieData(response.data);
  }

  useEffect(() => {
    fetMovieData();
  }, [fetMovieData]);

  //   const movies = movieData.map((movie) => {
  //     console.log("THIS MOVIE", movie);
  //     return <div>{movie.Title}</div>;
  //   });

  return <img src={movieData.Poster} alt={movieData.Title} />;
};

export default MovieData;
