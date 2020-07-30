import React from "react";

import Modal from "./modal/Modal";

import podcastPlatforms from "./resource/podcastPlatforms";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import { Popover } from "@material-ui/core";



function App() {

  const platformLinks = podcastPlatforms.map((platform) => {
    return (
      <Button target="_blank" href={platform.url} key={platform.id} style={{background: platform.hex}} variant="contained" color="primary">
        {platform.name}
        <i className="material-icons">arrow_forward</i>
      </Button>
    );
  });

  return (
    <div className="App">
      <div className="zg-top">
        <div className="card-container">
          <Modal />
        </div>

        <div className="paper-container">
          <Paper >
            <Typography component="p">
              Let's listen to Stage 18 on...
            </Typography>
          </Paper>
        </div>
      </div>

      {platformLinks}
    </div>
  );
}

export default App;
