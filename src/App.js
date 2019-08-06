import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function App() {
  console.log('hello');
  const classes = useStyles();

  return (
    <div className="App">

      <h1>Want to watch fourth wall?
        <br/>
      </h1>

      {/* https://podcasts.apple.com/us/podcast/the-fourth-wall-podcast/id1464608975 */}

      <Button  color="default" target="_blank" href="https://podcasts.apple.com/us/podcast/the-fourth-wall-podcast/id1464608975" variant="contained" className={classes.button}>
        Apple Podcasts
      </Button>
      <br/>

    
      <Button  color="secondary" target="_blank" href="https://www.youtube.com/channel/UCrMRs4dZmAAmKkbeLalixAA" variant="contained" className={classes.button}>
        Youtube
      </Button>
      
  
    </div>
  );
}

export default App;
