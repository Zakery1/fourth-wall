import React, { useState, useEffect } from "react";

import Dialog from "@material-ui/core/Dialog";
// import Button from "@material-ui/core/Button";

import axios from "axios";

import "./MovieData.scss";

const MovieData = (props) => {
  const [movieData, updateMovieData] = useState([]);
  const [open, setOpen] = React.useState(false);

  const { movie } = props;

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  useEffect(() => {
    async function fetchMovieData() {
      const response = await axios.get(
        `https://www.omdbapi.com/?t=${movie}&apikey=a752c9de`
      );

      updateMovieData(response.data);
    }
    fetchMovieData();
  }, [movie]);

  const movieRatings = () =>
    movieData.Ratings.map((rating) => {
      return (
        <div className="zg-movie-rating" key={rating.Source}>
          {rating.Source}: {rating.Value}
        </div>
      );
    });

  return (
    <div>
      <button onClick={handleClickOpen} className="zg-movie-data-container">
        <img
          className="zg-movie-poster"
          src={movieData.Poster}
          alt={movieData.Title}
        />

        <div className="zg-movie-title">{`${props.movie}`}</div>
      </button>
      <Dialog open={open} keepMounted>
        <div className="zg-movie-data-modal">
          <div className="zg-poster-and-ratings">
            <img
              className="zg-modal-poster"
              src={movieData.Poster}
              alt={movieData.Title}
            />
            <div className="zg-movie-ratings">
              {movieData.Ratings ? movieRatings() : ""}
            </div>
          </div>

          {/* <h5>this episode is featured in</h5> */}
          <br />
          <br />
          <button className="zg-cancel-modal" onClick={handleClose}>
            cancel
          </button>
        </div>
      </Dialog>
      {/* {movieData.Title.includes("Star Wars") ? <div className="zg-movie-title">{`Star Wars:  The Rist of Skywalker`}</div> : <div className="zg-movie-title">{`${movieData.Title}`}</div>} */}
    </div>
  );
};

export default MovieData;
