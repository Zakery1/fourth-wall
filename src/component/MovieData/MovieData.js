import React, { useState, useEffect } from "react";

import axios from "axios";

import "./MovieData.scss";

const MovieData = (props) => {
    console.log("props", props)
  const [movieData, updateMovieData] = useState([]);

  const { movie } = props;

  useEffect(() => {
    async function fetchMovieData() {
      const response = await axios.get(
        `https://www.omdbapi.com/?t=${movie}&apikey=a752c9de`
      );

      updateMovieData(response.data);
    }
    fetchMovieData();
  }, [movie]);
  return (
    <div>
      <img
        className="zg-movie-poster"
        src={movieData.Poster}
        alt={movieData.Title}
      />

      <div className="zg-movie-title">{`${props.movie}`}</div>
      {/* {movieData.Title.includes("Star Wars") ? <div className="zg-movie-title">{`Star Wars:  The Rist of Skywalker`}</div> : <div className="zg-movie-title">{`${movieData.Title}`}</div>} */}
    </div>
  );
};

export default MovieData;
