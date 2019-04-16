import React from 'react';
import { Grid, Icon } from '@material-ui/core';

const HealthIndicatorVotingOptions = () => {
  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" alignItems="center" spacing={40}>
        <Grid item><Icon>sentiment_very_dissatisfied</Icon></Grid>
        <Grid item><Icon>sentiment_neutral</Icon></Grid>
        <Grid item><Icon>sentiment_very_satisfied</Icon></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default HealthIndicatorVotingOptions;
