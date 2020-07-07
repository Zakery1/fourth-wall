import React from 'react';

import Modal from './modal/Modal';

import './App.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles(theme => ({

  apple: {
    border: 'solid #C463EB 2px',
    color: '#C463EB',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontSize: '12px',
    width: '180px',
    background: '#f1f4f6',
    height: '55px'
  },

  youtube: {
    border: 'solid #FF0000 2px',
    color: '#FF0000',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontSize: '12px',
    width: '180px',
    background: '#f1f4f6',
    height: '55px'
  },

  google: {
    border: 'solid #FF5722 2px',
    color: '#FF5722',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontSize: '12px',
    width: '180px',
    background: '#f1f4f6',
    height: '55px'
  },

  spotify: {
    border: 'solid #1BD75F 2px',
    color: '#1BD75F ',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontSize: '12px',
    width: '180px',
    background: '#f1f4f6',
    height: '55px'
  },

  podcastRepublic: {
    border: 'solid #5483DF 2px',
    color: '#5483DF',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontSize: '12px',
    width: '180px',
    background: '#f1f4f6',
    height: '55px'
  },

  podcastAddict: {
    border: 'solid #F3873C 2px',
    color: '#F3873C',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontSize: '12px',
    width: '180px',
    background: '#f1f4f6',
    height: '55px'
  },

  iHeart: {
    border: 'solid #C92325 2px',
    color: '#C92325',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontSize: '12px',
    width: '180px',
    background: '#f1f4f6',
    height: '55px'
  },

  card: {
    height: '200px'
  },

  root: {
    padding: theme.spacing(1, 1),
    color: 'rgb(65, 65, 65)'
  }
}));


function App() {
  console.log('hello');
  const classes = useStyles();
  return (
    <div className="App">

      <div className="zg-top">
        <div className="card-container">
        <Modal/>
        </div>

        <div className="paper-container">
          <Paper className={classes.root}>
            <Typography component="p">
              Let's listen to Stage 18 on...
          </Typography>
          </Paper>
        </div>
      </div>

      {/* <script type="text/javascript" language="javascript" src="https://www.boxofficemojo.com/data/js/wknd5.php"></script> */}

      <div className="link-holder">

        <Fab target="_blank" href="https://podcasts.apple.com/us/podcast/the-fourth-wall-podcast/id1464608975" variant="extended" className={classes.apple}>
          Listen on Apple <i className="material-icons">
            arrow_forward
                </i>
          </Fab>
        <br />

        <Fab target="_blank" href="https://www.youtube.com/channel/UCrMRs4dZmAAmKkbeLalixAA"  variant="extended" className={classes.youtube}>
          Listen on Youtube <i className="material-icons">
            arrow_forward
                </i>
        </Fab>
        <br />

        <Fab target="_blank" href="https://play.google.com/music/m/Isq5occ2n75eytqi3e44xes5ouy?t=The_Fourth_Wall_Podcast" variant="extended" className={classes.google}>
          Listen on Google
          <i className="material-icons">
            arrow_forward
                </i>
          </Fab>
        <br />

        <Fab target="_blank" href="https://open.spotify.com/show/75978jAwNVsjI2H6W4Gyux" variant="extended" className={classes.spotify}>
          Listen on Spotify
          <i className="material-icons">
            arrow_forward
                </i>
          </Fab>

        <br />

        <Fab target="_blank" href="https://www.podcastrepublic.net/podcast/1464608975" variant="extended" className={classes.podcastRepublic}>
          Listen on Podcast Republic
          <i className="material-icons">
            arrow_forward
                </i>
          </Fab>

        <br />

        <Fab target="_blank" href="http://podplayer.net/?podId=2422284&fbclid=IwAR1xK-By7B64duf_tnlOECVhOfwUBXolnNtnvKd_DrDjU_PkHXV8vJ0X5ZU" variant="extended" className={classes.podcastAddict}>
          Listen on Podcast Addict
          <i className="material-icons">
            arrow_forward
                </i>
          </Fab>

        <br />

        <Fab target="_blank" href="https://www.iheart.com/podcast/966-the-fourth-wall-podcast-45924242/" variant="extended" className={classes.iHeart}>
          Listen on iHeart Radio
          <i className="material-icons">
            arrow_forward
                </i>
          </Fab>
        <br/>
        <br/>
        <br/>
        <br />
      </div>
    </div>
  );
}

export default App;
