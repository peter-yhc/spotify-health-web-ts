import { Route, Switch } from 'react-router';
import React from 'react';
import { NotFoundPage } from './error';
import { LandingPage } from './landing';
import { SessionsPage } from './sessions';

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
