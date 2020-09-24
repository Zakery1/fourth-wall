import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import spinnerGif from "../../asset/spinner.gif";
import "./Search.scss";

function Search() {
  const [data, setData] = useState([]);
  const [noResultsMessage, setNoResultsMessage] = useState("");
  const [spinner, setSpinner] = useState(false);

  function searchByMovie(event) {
    if (event.key !== "Enter") {
      return;
    }
    setSpinner(true);
    const searchInput = event.target.value;
    if (searchInput.trim().length === 0) {
      return processBlankSearch();
    }
    fetchMovies(searchInput);
  }

  async function fetchMovies(searchInput) {
    const response = await axios.get(
      `https://limitless-lowlands-38782.herokuapp.com/api/movie/search?movie=${searchInput}`
      // `http://localhost:8080/api/movie/search?movie=${searchInput}`
    );

    processResponse(response);
  }

  function processResponse(response) {
    if (response.data.length === 0) {
      processNoResults();
      return;
    }
    prepareNewResults();
    setData(response.data);
  }

  function processBlankSearch() {
    setData([]);
    setNoResultsMessage("");
    setSpinner(false);
    setNoResultsMessage("Actually search for something, bro");
    return;
  }

  function prepareNewResults() {
    setNoResultsMessage("");
    setSpinner(false);
  }

  function processNoResults() {
    setData([]);
    setNoResultsMessage(
      "Sorry, we have not discussed a movie matching your search."
    );
    setSpinner(false);
  }

  const relevantMovie = data.map((movie) => {
    const searchedEpisodes = movie.episodes.map((episode) => {
      return (
        <div key={episode._id} className="zg-searched-episodes">
          Season: {episode.seasonNumber} <br />
          Episode Title: {episode.episodeName}
        </div>
      );
    });
    return (
      <div key={movie._id} className="zg-result-container">
        <div className="zg-found-movie">
          We discuss <span className="zg-found-movie-title">{movie.name}</span>{" "}
          in these episodes:
        </div>
        {searchedEpisodes}
        <br />
      </div>
    );
  });

  return (
    <div className="zg-search-container">
      <div>
        <Paper> Check here to see if we've discussed a specific movie.
        <br />
        <input
          className="zg-search-input"
          type="search"
          inputMode="search"
          onKeyDown={(event) => searchByMovie(event)}
        />
        </Paper>
      </div>
      {spinner ? <img alt="spinner" src={spinnerGif} /> : ""}
      {relevantMovie}
      {noResultsMessage}
    </div>
  );
}

export default Search;
