import React, { useState, useEffect } from "react";

import Dialog from "@material-ui/core/Dialog";
// import Button from "@material-ui/core/Button";

import axios from "axios";

import "./MovieData.scss";

const MovieData = (props) => {
  const [movieData, updateMovieData] = useState([]);
  const [open, setOpen] = React.useState(false);

  const { name } = props.movie;

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  useEffect(() => {
    async function fetchMovieData() {
      const response = await axios.get(
        `https://www.omdbapi.com/?t=${name}&apikey=a752c9de`
      );

      updateMovieData(response.data);
    }
    fetchMovieData();
  }, [name]);

  const timestamps = () =>
    props.movie.episodes.map((episode) => {
      return (
        <div className="zg-timestamp" key={episode._id}>
          <div className="zg-episode-reference">
            <p className="zg-episode-reference"></p>
            <span className="zg-season-number">
              Season: {episode.seasonNumber}
            </span>
            <br />
            {episode.episodeName}
          </div>
          <a href={episode.timestamp} className="zg-timestamp-link">
            Go directly to discussion.<span>&#8594;</span>
          </a>
        </div>
      );
    });

  const movieRatings = () =>
    movieData.Ratings.map((rating) => {
      return (
        <div className="zg-movie-rating" key={rating.Source}>
          <div className="zg-rating-value">{rating.Value}</div>

          <div className="zg-rating-source">
            {rating.Source === "Internet Movie Database"
              ? "IMDB"
              : rating.Source}
          </div>
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
      </button>

      <Dialog open={open} keepMounted>
        <div className="zg-movie-data-modal">
          <div className="zg-poster-and-data">
            <img
              className="zg-modal-poster"
              src={movieData.Poster}
              alt={movieData.Title}
            />
            <div className="zg-modal-data">
              <div className="zg-movie-ratings">
                {movieData.Ratings ? movieRatings() : ""}
              </div>
              <div className="zg-movie-instances">
                We discuss {movieData.Title} in:
                <span className="zg-timestamps"> {timestamps()}</span>
              </div>
            </div>
          </div>
          <button className="zg-cancel-modal" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default MovieData;
