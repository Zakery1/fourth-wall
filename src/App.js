import React from "react";

import Modal from "./modal/Modal";

import podcastPlatforms from "./resource/podcastPlatforms";
import "./App.scss";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import { Popover } from "@material-ui/core";

function App() {
  const platformLinks = podcastPlatforms.map((platform) => {
    return (
      <div >
        <Button
          className="zg-block zg-link"
          target="_blank"
          href={platform.url}
          key={platform.id}
          style={{ background: platform.hex }}
          variant="contained"
          color="primary"
        >
          {platform.name}
          <i className="material-icons">arrow_forward</i>
        </Button>
      </div>
    );
  });

  return (
    <div className="App">
      <div className="zg-block-holder">
        <Modal />
        {platformLinks}
      </div>
    </div>
  );
}

export default App;
