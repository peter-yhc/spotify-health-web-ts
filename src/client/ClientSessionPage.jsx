import React from 'react';
import { Route, Switch } from 'react-router';
import VotingPage from './voting/VotingPage';
import WelcomePage from './welcome/WelcomePage';

const ClientSessionPage = () => {
  return (
    <Switch>
      <Route path="/clients/welcome" component={WelcomePage} />
      <Route path="/clients/voting" component={VotingPage} />
    </Switch>
  );
};

export default ClientSessionPage;
