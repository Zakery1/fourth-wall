import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Search.scss";

function Search() {
  const [data, setData] = useState([]);
  // const [search]

  useEffect(() => {}, []);

  const searchByMovie = (searchInput) => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://limitless-lowlands-38782.herokuapp.com/api/movie/search?movie=${searchInput}`
      );
      setData(response.data);
    };
    fetchData();
  };



  const relevantMovie = data.map((movie) => {

    const searchedEpisodes = movie.episodes.map(episode => {
      return <div key={episode._id}>
        Season: {episode.seasonNumber} <br/>
        Episode Title: {episode.episodeName}
      </div>
    });

    return (
      <div key={movie._id}> We discuss {movie.name} in these episodes:{searchedEpisodes} <br/></div>
    );
  });

  console.log("data", data);

  return (
    <div className="zg-search-container">
      Search <br />
      <input onChange={(event) => searchByMovie(event.target.value)} /> <br />
      {relevantMovie}
    </div>
  );
}

export default Search;
