import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HealthIndicatorCard } from '../heath-indicators';
import { clientStoreActions } from '../store/client';
import Theme from '../Theme';

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '100px calc(100vh - 100px)',
  },
  header: {
    gridRow: '1 / 2',
  },
  title: {
    marginTop: '30px',
  },
  main: {
    padding: '1em',
    gridRow: '2 / 3',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
    gridAutoRows: '420px',
    gridRowGap: '10px',
    justifyItems: 'center',
    alignItems: 'center',
    marginBottom: 'auto',
  },
  progress: {
    color: Theme.BLUE,
  },
};

export const ClientSessionPage = (props) => {
  const { classes, cards, location, dispatch } = props;
  const sessionId = location.search.split('sessionId=')[1];

  useEffect(() => {
    dispatch(clientStoreActions.retrieveHealthIndicators(sessionId));
  }, []);

  const generateCards = () => {
    const displayCards = [];
    cards.forEach((card) => {
      displayCards.push(
        <HealthIndicatorCard
          key={card.indicator}
          indicator={card.indicator}
          textAwesome={card.textAwesome}
          textCrappy={card.textCrappy}
        />,
      );
    });
    return displayCards;
  };

  const awaitData = () => {
    if (!cards || cards.length === 0) {
      return (
        <CircularProgress className={classes.progress} />
      );
    }
    return generateCards();
  };

  return (
    <article className={classes.container}>
      <header className={classes.header}>
        <h2 className={classes.title}>Client Session</h2>
      </header>
      <main className={classes.main}>
        {awaitData()}
      </main>
    </article>
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
