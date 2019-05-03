import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import HealthIndicatorCard from '../heath-indicators/HealthIndicatorCard';
import indicatorStub from '../heath-indicators/health-indicators-stub';

const styles = {
  header: {
    marginTop: '1em',
    marginBottom: '1em',
  },
  main: {
    padding: '1em',
  },
};

const AdminSessionsPage = (props) => {
  const { classes } = props;

  const generateCards = () => {
    const cards = [];
    indicatorStub.forEach((stub) => {
      cards.push(
        <Grid item key={stub.area}>
          <HealthIndicatorCard
            area={stub.area}
            textAwesome={stub.textAwesome}
            textCrappy={stub.textCrappy}
          />
        </Grid>,
      );
    });
    return cards;
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <Typography variant="h2">
          Sessions Admin
        </Typography>
      </header>
      <main className={classes.main}>
        <Grid container spacing={5} direction="row" alignItems="center" justify="center">
          {generateCards()}
        </Grid>
      </main>
    </React.Fragment>
  );
};

AdminSessionsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminSessionsPage);
