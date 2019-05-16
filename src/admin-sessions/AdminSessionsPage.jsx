import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { VotingPage, ProgressSelector, ResultSummaryPage, InstructionPage } from './components';

const styles = {
  article: {
    display: 'grid',
    gridTemplateColumns: '40px 50px auto 50px 40px',
    gridTemplateRows: '15% auto',
  },
  header: {
    marginBottom: '1em',
    gridColumn: '1 / 6',
  },
  main: {
    padding: '1em',
    display: 'grid',
    gridColumn: '2 / 5',
  },
};

export const AdminSessionsPage = (props) => {
  const { classes, match } = props;

  if (match.isExact) {
    return (<Redirect to="/admin-sessions/instructions" />);
  }

  return (
    <article className={classes.article}>
      <header className={classes.header}>
        <ProgressSelector />
      </header>
      <main className={classes.main}>
        <Switch>
          <Route path="/admin-sessions/instructions" component={InstructionPage} />
          <Route path="/admin-sessions/voting" component={VotingPage} />
          <Route path="/admin-sessions/results" component={ResultSummaryPage} />
        </Switch>
      </main>
    </article>
  );
};

AdminSessionsPage.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminSessionsPage);
