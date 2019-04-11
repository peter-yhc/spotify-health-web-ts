import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import IndicatorCard from '../heath-indicators/IndicatorCard';
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

const SessionsPage = (props) => {
  const { classes } = props;

  const generateCards = () => {
    const cards = [];
    indicatorStub.forEach((stub) => {
      cards.push(
        <Grid item xs={12} sm={6} md={3} key={stub.area}>
          <IndicatorCard
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
        <Typography variant="title">
          Sessions Admin
        </Typography>
      </header>
      <main className={classes.main}>
        <Grid container spacing={32}>
          {generateCards()}
        </Grid>
      </main>
    </React.Fragment>
  );
};

SessionsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SessionsPage);
