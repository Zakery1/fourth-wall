import React from "react";

import LogoModal from "./modal/LogoModal";
import LinkModal from './modal/LinkModal';
import Search from './component/Search';

import podcastPlatforms from "./resource/podcastPlatforms";
import "./App.scss";

function App() {

  const platformLinks = podcastPlatforms.map((platform) => {
    return (
        <LinkModal key={platform.id} platform={platform} />
    );
  });

  return (
    <div className="App">
      <div className="zg-block-holder">
        {/* <Search /> */}
        <LogoModal />
        {platformLinks}
      </div>
    </div>
  );
}

export default App;
