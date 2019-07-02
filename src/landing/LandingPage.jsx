import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = makeStyles({
  title: {
    margin: '1em 0',
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

function LandingPage() {
  const classes = styles();
  return (
    <React.Fragment>
      <main>
        <h2>Spotify Health Checks</h2>
        <h5>
          <Link className={classes.link} to="/admin">
            New Session
          </Link>
        </h5>
      </main>
    </React.Fragment>
  );
}

export default LandingPage;
