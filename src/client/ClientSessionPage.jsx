import React from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import WelcomePage from './welcome/WelcomePage';
import { Breadcrumb } from './layout-components';
import AuthRoute from '../router/AuthRequiredClientRoute';
import VotingPage from './voting/VotingPage';

const styles = makeStyles({
  page: {
    display: 'grid',
    gridTemplateColumns: 'minmax(auto, 200px) auto minmax(auto, 200px) ',
    gridTemplateRows: '100px auto',
    gridTemplateAreas: `
      'header header header'
      'padding-left main padding-right'
    `,
  },
  header: {
    gridArea: 'header',
  },
  main: {
    gridArea: 'main',
  },
});

const ClientSessionPage = ({ location }) => {
  const classes = styles();
  return (
    <div className={classes.page}>
      <header className={classes.header}>
        <Breadcrumb location={location.pathname} />
      </header>
      <main className={classes.main}>
        <Switch>
          <Route path="/clients/welcome" component={WelcomePage} />
          <AuthRoute path="/clients/voting" component={VotingPage} />
        </Switch>
      </main>
    </div>
  );
};

ClientSessionPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ClientSessionPage;
