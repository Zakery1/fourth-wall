import React, { useState } from "react";
import axios from "axios";
import "./Search.scss";

function Search() {
  const [data, setData] = useState([]);
  const [noResultsMessage, setNoResultsMessage] = useState("");
  // const [searchInput, setSearchInput] = useState("");

  function searchByMovie(event) {
    if (event.key !== "Enter" || event.key !== "Enter") {
      return;
    }

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
        return;
      }
      setNoResultsMessage("");
      setData(response.data);
    }

    fetchData();
  }

  const relevantMovie = data.map((movie) => {
    const searchedEpisodes = movie.episodes.map((episode) => {
      return (
        <div key={episode._id}>
          Season: {episode.seasonNumber} <br />
          Episode Title: {episode.episodeName}
        </div>
      );
    });
    return (
      <div key={movie._id}>
        We discuss {movie.name} in these episodes:{searchedEpisodes} <br />
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
      <br />
      {relevantMovie}
      {noResultsMessage}
    </div>
  );
}

export default Search;
