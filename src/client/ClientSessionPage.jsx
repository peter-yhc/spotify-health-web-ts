import React from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import WelcomePage from './welcome/WelcomePage';
import { Breadcrumb } from './layout-components';
import AuthRequiredClientRoute from '../router/AuthRequiredClientRoute';
import VotingPage from './voting/VotingPage';
import styles from './ClientSessionPage.module.scss';

const ClientSessionPage = ({ location }) => {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
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
