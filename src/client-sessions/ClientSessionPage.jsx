import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HealthIndicatorCard } from '../heath-indicators';
import DebugPanel from '../debug-panel/DebugPanel';
import { clientStoreActions } from '../store/client';

const styles = {
  header: {
    marginTop: '1em',
    marginBottom: '1em',
  },
  main: {
    padding: '1em',
  },
};

export const ClientSessionPage = (props) => {
  const { classes, cards, location, dispatch } = props;

  console.log(location);

  useEffect(() => {
    dispatch(clientStoreActions.retrieveHealthIndicators());
  }, []);

  const generateCards = () => {
    const displayCards = [];
    cards.forEach((card) => {
      displayCards.push(
        <Grid item key={card.indicator}>
          <HealthIndicatorCard
            indicator={card.indicator}
            textAwesome={card.textAwesome}
            textCrappy={card.textCrappy}
          />
        </Grid>,
      );
    });
    return displayCards;
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <Typography variant="h2">Client Session</Typography>
      </header>
      <main className={classes.main}>
        <Grid container spacing={5} direction="row" alignItems="center" justify="center">
          {generateCards()}
        </Grid>
      </main>
      <DebugPanel />
    </React.Fragment>
  );
};

ClientSessionPage.propTypes = {
  classes: PropTypes.object.isRequired,
  cards: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    cards: state.clientStoreReducer.cards,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ClientSessionPage));
