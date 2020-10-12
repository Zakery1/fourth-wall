import React, { useState, useEffect } from "react";

import axios from "axios";

function MoviesCovered() {
  const [allMovies, updateAllMovies] = useState([]);

  useEffect(() => {
    async function fetchAllMovies() {
       const response = await axios.get(
        `https://limitless-lowlands-38782.herokuapp.com/api/movie/all`
        // `http://localhost:8080/api/movie/search?movie=${searchInput}`
      );
      updateAllMovies(response.data)
    }
    fetchAllMovies();
  });

    // const movieList = allMovies.map(movie => {
    //     return <div key={movie._id}>{movie.name}</div>
    // });

  return <div></div>;
}

export default MoviesCovered;
