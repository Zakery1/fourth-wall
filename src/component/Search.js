import React, { useState } from "react";
import axios from "axios";
import spinnerGif from "../asset/spinner.gif";
import "./Search.scss";

function Search() {
  const [data, setData] = useState([]);
  const [noResultsMessage, setNoResultsMessage] = useState("");
  const [spinner, setSpinner] = useState(false);

  function searchByMovie(event) {
    if (event.key !== "Enter") {
      return;
    }
    setData([]);
    setSpinner(true);

    event.target.blur();

    const searchInput = event.target.value;

    async function fetchData() {
      if (searchInput.trim().length === 0) {
        setData([]);
        setNoResultsMessage("");
        return;
      }
      const response = await axios.get(
        `https://limitless-lowlands-38782.herokuapp.com/api/movie/search?movie=${searchInput}`
        // `http://localhost:8080/api/movie/search?movie=${searchInput}`
      );

      if (response.data.length === 0) {
        setData([]);
        setNoResultsMessage(
          "Sorry, we have not discussed a movie matching your search."
        );
        setSpinner(false);
        return;
      }
      setNoResultsMessage("");
      setData(response.data);
      setSpinner(false);
    }

    fetchData();
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
        Check here to see if we've discussed a specific movie.
        <br />
        <input
          className="zg-search-input"
          type="search"
          inputMode="search"
          onKeyDown={(event) => searchByMovie(event)}
        />
      </div>
      {spinner ? <img alt="spinner" src={spinnerGif} /> : ""}
      {relevantMovie}
      {noResultsMessage}
    </div>
  );
}

export default Search;
