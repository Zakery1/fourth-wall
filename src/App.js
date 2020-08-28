import React from "react";

import LogoModal from "./modal/LogoModal";
import LinkModal from "./modal/LinkModal";
// import Search from './component/Search';

import podcastPlatforms from "./resource/podcastPlatforms";
import "./App.scss";

function App() {
  const platformLinks = podcastPlatforms.map((platform) => {
    return <LinkModal key={platform.id} platform={platform} />;
  });

  return (
    <div className="App">
      <div className="zg-top-section">
        <div className="zg-block-holder">
          {/* <Search /> */}
          <LogoModal />
          <div className="zg-platform-container">
            <p className="zg-about">
              The Stage 18 Podcast is the greatest movie podcast in the history of recorded audio.  Zak and Cody, from two very different perspectives, discuss new movies, old movies, and movie news. 
            </p>
            <span>
              Listen to the Stage 18 Podcast on the following platforms:
            </span>
            {platformLinks}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
