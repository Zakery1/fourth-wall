import React from "react";

// import Search from "./component/Search/Search.js";
import MoviesCovered from "./component/MoviesCovered/MoviesCovered.js";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="zg-top-section">
        <Header />
      </div>
      {/* <div className="zg-search-section">
        <Search />
      </div> */}
      <div className="zg-move-list-section">
        <MoviesCovered />
      </div>
      <Footer />
    </div>
  );
}

export default App;
