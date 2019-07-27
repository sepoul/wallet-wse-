import React from 'react';
import logo from './../../logo.png';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import Box from '@material-ui/core/Box';

import './../../App.css';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

function StateLessFront(props) {
  const classes = useStyles();

  return (
    <Box className="App" >
      <header className="App-header">
        <Typography variant="h1">
        The world social economy
        </Typography>
        <img src={logo} className="App-logo" alt="logo" />
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Why we exist
          </Typography>
          <Typography component="p">
            This platform helps you buy goods using our free wsec. You can
            also sell goods using the same currency. Start by making an
            account and you can't start your purchases immediatly.
          </Typography>
          <Link
            component="button"
            variant="body2"
            className="Button"
            onClick={props.handleDrawer}
          >
            Sign Up
          </Link>
        </Paper>
      </header>
      <div>
      </div>
    </Box>
  );
}

export default StateLessFront;
