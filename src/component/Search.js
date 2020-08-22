import React, { useEffect, useState } from "react";
import axios from "axios";

function Search() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://limitless-lowlands-38782.herokuapp.com/"
      );
      setData(response.data);
    };

    fetchData();
  }, []);

  console.log(data);

  return <div></div>;
}

export default Search;
