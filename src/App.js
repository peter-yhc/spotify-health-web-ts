import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

const styles = {
  title: {
    margin: '1em 0',
  },
};

function App(props) {
  const { classes } = props;
  return (
    <div className="App">
      <header className="App-header">
        <Typography className={classes.title} variant="h2">Spotify Health Checks</Typography>
        <Typography variant="h5">
          <Link href="dud">
            New Session
          </Link>
        </Typography>
      </header>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(App);
