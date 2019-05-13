import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

const styles = {
  title: {
    margin: '1em 0',
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
};

function LandingPage(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <main>
        <h2>Spotify Health Checks</h2>
        <h5>
          <Link className={classes.link} href="admin-sessions">
            New Session
          </Link>
        </h5>
      </main>
    </React.Fragment>
  );
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);
