import React from 'react';
import Typography from '@material-ui/core/Typography';
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
        <Typography className={classes.title} variant="h2">Spotify Health Checks</Typography>
        <Typography variant="h5">
          <Link className={classes.link} href="admin-sessions">
            New Session
          </Link>
        </Typography>
      </main>
    </React.Fragment>
  );
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);
