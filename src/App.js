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

      <Button variant="contained" className={classes.button}>
        Default
      </Button>
      
  
    </div>
  );
}

export default App;
