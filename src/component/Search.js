import React, { useState } from "react";
import axios from "axios";
import "./Search.scss";

function Search() {
  const [data, setData] = useState([]);
  const [noResultsMessage, setNoResultsMessage] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const searchByMovie = () => {
    const fetchData = async () => {
      if (searchInput.trim().length === 0) {
        setData([]);
        setNoResultsMessage("");
        return;
      }
      const response = await axios.get(
        // `https://limitless-lowlands-38782.herokuapp.com/api/movie/search?movie=${searchInput}`
        `http://localhost:8080/api/movie/search?movie=${searchInput}`
      );
      if (response.data.length === 0) {
        setData([]);
        setNoResultsMessage(
          "Sorry, we have not discussed a movie matching your search"
        );
        return;
      }
      setNoResultsMessage("");
      setData(response.data);
    };
    fetchData();
  };

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
        <input
          className="zg-search-input"
          inputMode="search"
          type="text"
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <span style={{ cursor: "pointer" }} onClick={searchByMovie}>
          search for stuff
        </span>
      </div>

      <br />
      {relevantMovie}
      {noResultsMessage}
      <br />

    </div>
  );
}

export default Search;
