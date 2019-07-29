import { Route, Switch } from 'react-router';
import React from 'react';
import { NotFoundPage } from './error';
import { LandingPage } from './landing';
import { AdminPage } from './admin';
import { ClientSessionPage } from './client';

const App: React.FunctionComponent = () => (
    <React.Fragment>
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/clients" component={ClientSessionPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </React.Fragment>
);

export default App;
