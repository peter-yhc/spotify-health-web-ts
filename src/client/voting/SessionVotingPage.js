import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import VotingPage from './VotingPage';

const SessionVotingPage = ({ location, session }) => {
  return (() => {
    if (!session.id || !session.passkey) {
      return (<Redirect to={`/clients/welcome${location.search}`} />);
    }
    return (<VotingPage />);
  })();
};

const mapStateToProps = state => ({
  session: state.clientStoreReducer.session,
});

export default connect(mapStateToProps)(SessionVotingPage);
