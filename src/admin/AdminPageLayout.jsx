import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { ProgressBreadcrumb } from './layout-components';
import InstructionPage from './instructions/InstructionPage';
import VotingPage from './voting/VotingPage';
import ResultSummaryPage from './summary/ResultSummaryPage';

const styles = {
  article: {
    display: 'grid',
    gridTemplateColumns: '40px 50px auto 50px 40px',
    gridTemplateRows: '100px auto',
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

export const AdminPageLayout = (props) => {
  const { classes, match } = props;

  if (match.isExact) {
    return (<Redirect to="/admin/instructions" />);
  }

  return (
    <article className={classes.article}>
      <header className={classes.header}>
        <ProgressBreadcrumb />
      </header>
      <main className={classes.main}>
        <Switch>
          <Route path="/admin/instructions" component={InstructionPage} />
          <Route path="/admin/voting" component={VotingPage} />
          <Route path="/admin/results" component={ResultSummaryPage} />
        </Switch>
      </main>
    </article>
  );
};

AdminPageLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminPageLayout);
