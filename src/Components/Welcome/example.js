import React from 'react';
import logo from './../../logo.png';
import { makeStyles } from '@material-ui/core/styles';
import SignUp from './../Register/register.js';

import './../../App.css';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

function StateLessFront(props) {
  const classes = useStyles();

  return (
    <div className="App" >
      <header className="App-header">
        <div className="Welcome">
          <h1>
          The world social economy
          </h1>
          <img src={logo} className="App-logo" alt="logo" />
          <article className={classes.root}>
            <h5 variant="h5" component="h3">
              Why we exist
            </h5>
            <p component="p">
              This platform helps you buy goods using our free wsec. You can
              also sell goods using the same currency. Start by making an
              account and you can't start your purchases immediatly.
            </p>
            <a
              component="button"
              variant="body2"
              className="Button"
              onClick={props.handleDrawer}
            >
              Sign Up
            </a>
          </article>
        </div>
        <div className="Sign-Up">
          <SignUp>
          </SignUp>
        </div>
      </header>
      <div>
      </div>
    </div>
  );
}

export default StateLessFront;
