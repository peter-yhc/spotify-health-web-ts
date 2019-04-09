import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

const styles = {
  app: {
    textAlign: 'center',
  },
  appHeader: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  title: {
    margin: '1em 0',
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
};

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <Typography className={classes.title} variant="h2">Spotify Health Checks</Typography>
        <Typography variant="h5">
          <Link className={classes.link} href="dud">
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
