import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Breadcrumb } from './layout-components';
import InstructionPage from './instructions/InstructionPage';
import VotingPage from './voting/VotingPage';
import ResultSummaryPage from './summary/ResultSummaryPage';

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

export const AdminPageLayout = (props) => {
  const classes = styles();
  const { match, location } = props;
  if (match.isExact) {
    return (<Redirect to="/admin/instructions" />);
  }

  return (
    <div className={classes.page}>
      <header className={classes.header}>
        <Breadcrumb location={location.pathname} />
      </header>
      <main className={classes.main}>
        <Switch>
          <Route path="/admin/instructions" component={InstructionPage} />
          <Route path="/admin/voting" component={VotingPage} />
          <Route path="/admin/results" component={ResultSummaryPage} />
        </Switch>
      </main>
    </div>
  );
};

AdminPageLayout.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default AdminPageLayout;
