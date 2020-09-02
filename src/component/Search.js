import React, { useState } from "react";
import axios from "axios";
import "./Search.scss";

function Search() {
  const [data, setData] = useState([]);
  const [noResultsMessage, setNoResultsMessage] = useState("");
  const [searchInput, setSearchInput] = useState("");

   function searchByMovie () {
 
    async function fetchData () {
      console.log("axios call");
      if (searchInput.trim().length === 0) {
        console.log("no data");
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
    <div style={{ height: "1000px" }} className="zg-search-container">
      <div>
        Check here to see if we've discussed a specific movie.
        <input
          className="zg-search-input"
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>
      <br />
      <div>{searchInput}</div>

      <br />
      <button
        onClick={searchByMovie}
      >
        search for stuff
      </button>

      <br />
      {relevantMovie}
      {noResultsMessage}
    </div>
  );
}

export default Search;
