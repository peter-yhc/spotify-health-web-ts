import React from 'react';
import { Route, Switch } from 'react-router';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import WelcomePage from './welcome/WelcomePage';
import { Breadcrumb } from './layout-components';
import AuthRequiredClientRoute from '../router/AuthRequiredClientRoute';
import VotingPage from './voting/VotingPage';

const styles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '100px calc(100vh - 100px)',
  },
  header: {
    gridRow: '1 / 2',
  },
  title: {
    marginTop: '30px',
  },
});

const ClientSessionPage = ({ location }) => {
  const classes = styles();

  return (
    <article className={classes.container}>
      <header className={classes.header}>
        <Breadcrumb location={location.pathname} />
      </header>
      <Switch>
        <Route path="/clients/welcome" component={WelcomePage} />
        <AuthRequiredClientRoute path="/clients/voting" component={VotingPage} />
      </Switch>
    </article>
  );
};

ClientSessionPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ClientSessionPage;
