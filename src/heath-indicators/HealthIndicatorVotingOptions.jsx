import React from 'react';
import { Button, Grid, Icon } from '@material-ui/core';
import PropTypes from 'prop-types';

const HealthIndicatorVotingOptions = (props) => {
  const { onSubmit } = props;

  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
        <Grid item>
          <Button onClick={onSubmit(0)}>
            <Icon>sentiment_very_dissatisfied</Icon>
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={onSubmit(3)}>
            <Icon>sentiment_neutral</Icon>
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={onSubmit(5)}>
            <Icon>sentiment_very_satisfied</Icon>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

HealthIndicatorVotingOptions.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default HealthIndicatorVotingOptions;
