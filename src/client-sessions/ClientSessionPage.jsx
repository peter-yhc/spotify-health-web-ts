import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HealthIndicatorCard } from '../heath-indicators';
import DebugPanel from '../debug-panel/DebugPanel';

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
  const { classes, cards, location } = props;

  console.log(location);

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
};

const mapStateToProps = (state) => {
  return {
    cards: state.clientSessionReducer.cards,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ClientSessionPage));
