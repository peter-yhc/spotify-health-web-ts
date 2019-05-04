import { Route, Switch } from 'react-router';
import React from 'react';
import { NotFoundPage } from './error';
import { LandingPage } from './landing';
import { AdminSessionsPage } from './admin-sessions';
import { ClientSessionPage } from './client-sessions';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/admin-sessions" exact component={AdminSessionsPage} />
        <Route path="/sessions" exact component={ClientSessionPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
