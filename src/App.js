import { Route, Switch } from 'react-router';
import React from 'react';
import LandingPage from './landing/LandingPage';
import SessionsPage from './sessions/SessionsPage';
import NotFoundPage from './error/NotFoundPage';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/sessions" exact component={SessionsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
