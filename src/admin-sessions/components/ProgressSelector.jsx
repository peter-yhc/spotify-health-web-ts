import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core/index';
import Icon from '@material-ui/core/Icon/index';
import State from './State';

const styles = {
  container: {
    width: '100%',
    height: '2em',
    backgroundColor: 'hsl(0, 0%, 30%)',
    color: 'hsl(0, 0%, 90%)',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '1vw',
  },
  breadCrumbs: {
    display: 'inline-block',
  },
};

export const ProgressSelector = (props) => {
  const { classes, onStateChange } = props;

  return (
    <React.Fragment>
      <section className={classes.container}>
        <Typography className={classes.breadCrumbs} onClick={onStateChange(State.menu)}>
          Selection
        </Typography>
        <Icon>chevron_right</Icon>
        <Typography className={classes.breadCrumbs} onClick={onStateChange(State.voting)}>
          Voting
        </Typography>
        <Icon>chevron_right</Icon>
        <Typography className={classes.breadCrumbs} onClick={onStateChange(State.summary)}>
          Summary
        </Typography>
      </section>
    </React.Fragment>
  );
};

ProgressSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  onStateChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProgressSelector);
