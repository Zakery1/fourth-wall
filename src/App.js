import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    // background: 'green'
  },

  apple: {
    background: '#C463EB',
    color: 'white',
    margin: theme.spacing(1),
  },

  youtube: {
    background: '#ED3833',
    color: 'white',
    margin: theme.spacing(1),
  },

  google: {
    background: '#3A7CEC',
    color: 'white',
    margin: theme.spacing(1),
  },

  spotify: {
    background: '#1BD75F',
    color: 'white',
    margin: theme.spacing(1),
  },

  stitcher: {
    background: '#FAC714',
    color: 'white',
    margin: theme.spacing(1),
  }

}));


function App() {
  console.log('hello');
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className="App">


      <img className="main-logo" src="https://i.iheart.com/v3/catalog/podcast/45924242" alt="fourth wall podcast logo" />


      <h2>Want to hear The Fourth Wall?
        <br />
      </h2>

      {/* https://podcasts.apple.com/us/podcast/the-fourth-wall-podcast/id1464608975 */}

      <Button target="_blank" href="https://podcasts.apple.com/us/podcast/the-fourth-wall-podcast/id1464608975" variant="contained" className={classes.apple}>
        Apple Podcasts
      </Button>
      <br />


      <Button target="_blank" href="https://www.youtube.com/channel/UCrMRs4dZmAAmKkbeLalixAA" className={classes.youtube}>
        Youtube
      </Button>

      <br />

      <Button target="_blank" href="https://play.google.com/music/m/Isq5occ2n75eytqi3e44xes5ouy?t=The_Fourth_Wall_Podcast" variant="contained" className={classes.google}>
        Google
      </Button>

      <br />

      <Button target="_blank" href="https://open.spotify.com/show/75978jAwNVsjI2H6W4Gyux" variant="contained" className={classes.spotify}>
        Spotify
      </Button>

      <br/>

      <Button target="_blank" href="https://www.stitcher.com/podcast/anchor-podcasts/the-fourth-wall-with-zak-and-cody" variant="contained" className={classes.stitcher}>
        Stitcher
      </Button>
  
    </div>
  );
}

export default App;
