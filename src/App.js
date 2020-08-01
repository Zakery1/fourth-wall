import React from "react";

import LogoModal from "./modal/LogoModal";
import LinkModal from './modal/LinkModal';

import podcastPlatforms from "./resource/podcastPlatforms";
import "./App.scss";

function App() {

  const platformLinks = podcastPlatforms.map((platform) => {
    return (
      <div key={platform.id}>
        <LinkModal platform={platform} />
      </div>
    );
  });

  return (
    <div className="App">
      <div className="zg-block-holder">
        <LogoModal />
        {platformLinks}
      </div>
    </div>
  );
}

export default App;
