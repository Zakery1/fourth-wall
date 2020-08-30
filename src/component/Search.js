import React, { useState } from "react";
import axios from "axios";
import "./Search.scss";

function Search() {
  const [data, setData] = useState([]);
  const [noResultsMessage, setNoResultsMessage] = useState("");

  const searchByMovie = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    const searchInput = event.target.value;

    const fetchData = async () => {
      if (searchInput.trim().length === 0) {
        setData([]);
        setNoResultsMessage("");
        return;
      }
      const response = await axios.get(
        `${process.env.API_URL}/api/movie/search?movie=${searchInput}` ||
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

  console.log("data", data);

  return (
    <div className="zg-search-container">
      Search <br />
      <input onKeyDown={(event) => searchByMovie(event)} /> <br />
      {relevantMovie}
      {noResultsMessage}
    </div>
  );
}

export default Search;
