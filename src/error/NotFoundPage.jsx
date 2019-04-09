import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const styles = {
  content: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const NotFoundPage = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <main className={classes.content}>
        <span>404 not found</span>
      </main>
    </React.Fragment>
  );
};

NotFoundPage.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(NotFoundPage);
