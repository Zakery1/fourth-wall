import React from 'react';

import Feed from './component/Feed';
import Modal from './modal/Modal';

import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
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
    border: 'solid #FDCC17 2px',
    color: '#FDCC17',
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
  const theme = useTheme();


  return (
    <div className="App">

      <div className="zg-top">
        <div className="card-container">
        <Modal/>
        </div>

        

        <div className="paper-container">
          <Paper className={classes.root}>
            <Typography component="p">
              Let's listen to The Fourth Wall on...
          </Typography>
          </Paper>
        </div>
      </div>

      {/* <script type="text/javascript" language="javascript" src="https://www.boxofficemojo.com/data/js/wknd5.php"></script> */}

      <div className="link-holder">

        <Fab target="_blank" href="https://podcasts.apple.com/us/podcast/the-fourth-wall-podcast/id1464608975" variant="outlined" className={classes.apple}>
          Listen on Apple <i class="material-icons">
            arrow_forward
                </i>
          </Fab>
        <br />


        <Fab target="_blank" href="https://www.youtube.com/channel/UCrMRs4dZmAAmKkbeLalixAA"  variant="outlined" className={classes.youtube}>
          Listen on Youtube <i class="material-icons">
            arrow_forward
                </i>
        </Fab>

        <br />

        <Fab target="_blank" href="https://play.google.com/music/m/Isq5occ2n75eytqi3e44xes5ouy?t=The_Fourth_Wall_Podcast" variant="outlined" className={classes.google}>
          Listen on Google
          <i class="material-icons">
            arrow_forward
                </i>
          </Fab>

        <br />

        <Fab target="_blank" href="https://open.spotify.com/show/75978jAwNVsjI2H6W4Gyux" variant="outlined" className={classes.spotify}>
          Listen on Spotify
          <i class="material-icons">
            arrow_forward
                </i>
          </Fab>

        <br />

        <Fab target="_blank" href="https://www.podcastrepublic.net/podcast/1464608975" variant="outlined" className={classes.podcastRepublic}>
          Listen on Podcast Republic
          <i class="material-icons">
            arrow_forward
                </i>
          </Fab>

        <br />

        <Fab target="_blank" href="https://open.spotify.com/show/75978jAwNVsjI2H6W4Gyux" variant="outlined" className={classes.podcastAddict}>
          Listen on Podcast Addict
          <i class="material-icons">
            arrow_forward
                </i>
          </Fab>

        <br />

        <Fab target="_blank" href="https://www.iheart.com/podcast/966-the-fourth-wall-podcast-45924242/" variant="outlined" className={classes.iHeart}>
          Listen on iHeart Radio
          <i class="material-icons">
            arrow_forward
                </i>
          </Fab>

        <br />

        <div className="feeds">
          <div className="paper-container">
            <Paper className={classes.root}>
              <Typography component="p">
                Listen now...
              </Typography>
            </Paper>
          </div>
        </div>
      </div>
          <Feed />
    </div>
  );
}

export default App;
