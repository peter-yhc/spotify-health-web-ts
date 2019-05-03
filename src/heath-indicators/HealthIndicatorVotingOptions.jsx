import React from 'react';
import { Button, Icon } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = {
  buttonContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
};

const HealthIndicatorVotingOptions = (props) => {
  const { onSubmit, classes } = props;

  return (
    <React.Fragment>
      <section className={classes.buttonContainer}>
        <Button onClick={onSubmit(0)}>
          <Icon>sentiment_very_dissatisfied</Icon>
        </Button>
        <Button onClick={onSubmit(3)}>
          <Icon>sentiment_neutral</Icon>
        </Button>
        <Button onClick={onSubmit(5)}>
          <Icon>sentiment_very_satisfied</Icon>
        </Button>
      </section>
    </React.Fragment>
  );
};

HealthIndicatorVotingOptions.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HealthIndicatorVotingOptions);
