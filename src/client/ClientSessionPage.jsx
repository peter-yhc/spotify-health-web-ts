import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { VotingHealthIndicatorCard } from '../health-indicators';
import { clientStoreActions } from '../store/client';
import Theme from '../Theme';

const styles = makeStyles({
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
});

export const ClientSessionPage = ({ cards, location, dispatch, clientId }) => {
  const classes = styles();
  const sessionId = location.search.split('session=')[1];

  useEffect(() => {
    dispatch(clientStoreActions.registerClientToSession(sessionId));
  }, [dispatch, sessionId]);

  useEffect(() => {
    if (!clientId) {
      return;
    }
    dispatch(clientStoreActions.retrieveHealthIndicators(sessionId));
  }, [dispatch, clientId]);

  const generateCards = () => {
    return cards.map(card => (
      <VotingHealthIndicatorCard
        key={card.name}
        indicator={card.name}
        textAwesome={card.textAwesome}
        textCrap={card.textCrap}
      />
    ));
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
  cards: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  clientId: PropTypes.string,
};

ClientSessionPage.defaultProps = {
  clientId: undefined,
};

const mapStateToProps = (state) => {
  return {
    cards: state.clientStoreReducer.cards,
    clientId: state.clientStoreReducer.client.id,
    sessionId: state.clientStoreReducer.session.id,
  };
};

export default connect(mapStateToProps)(ClientSessionPage);
