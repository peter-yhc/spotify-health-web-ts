import { Route } from 'react-router';
import React from 'react';
import LandingPage from './landing/LandingPage';
import SessionsPage from './sessions/SessionsPage';

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={LandingPage} />
      <Route path="/sessions" component={SessionsPage} />
    </React.Fragment>
  );
}

export default App;
