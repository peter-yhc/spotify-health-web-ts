import React from 'react';
import { Route, Switch } from 'react-router';
import VotingPage from './voting/VotingPage';

const ClientSessionPage = () => {
  return (
    <Switch>
      <Route path="/clients/voting" component={VotingPage} />
    </Switch>
  );
};

export default ClientSessionPage;
