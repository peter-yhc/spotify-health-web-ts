import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { VotingHealthIndicatorCard } from '../../health-indicators';
import { clientStoreActions } from '../../store/client';
import Theme from '../../Theme';

const styles = makeStyles({
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

const STATE = {
  WAITING_DATA: 'waiting data',
  READY: 'loaded',
};

export const VotingPage = ({ dispatch, cards, session }) => {
  const classes = styles();
  const [state, updateState] = useState(STATE.WAITING_DATA);
  useEffect(() => {
    if (!cards || cards.length === 0) {
      updateState(STATE.WAITING_DATA);
    } else {
      updateState(STATE.READY);
    }
  }, [cards]);

  useEffect(() => {
    dispatch(clientStoreActions.retrieveHealthIndicators(
      { sessionId: session.id, passkey: session.passkey },
    ));
  }, [dispatch, session]);

  const showCards = () => {
    return cards.map(card => (
      <VotingHealthIndicatorCard
        key={card.name}
        indicator={card.name}
        textAwesome={card.textAwesome}
        textCrap={card.textCrap}
      />
    ));
  };

  return (
    <main className={classes.main}>
      {(() => {
        if (state === STATE.WAITING_DATA) {
          return (<CircularProgress className={classes.progress} />);
        }
        return showCards();
      })()}
    </main>
  );
};

VotingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired,
  session: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    cards: state.clientStoreReducer.cards,
    session: state.clientStoreReducer.session,
  };
};

export default connect(mapStateToProps)(VotingPage);
