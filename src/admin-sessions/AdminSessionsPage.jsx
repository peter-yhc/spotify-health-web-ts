import React, { useState, Suspense, lazy } from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { ProgressSelector, State } from './components';
import DebugPanel from '../debug-panel/DebugPanel';

const LiveVotingTable = lazy(() => import('./components/LiveVotingTable'));

const styles = {
  article: {
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '15% auto',
  },
  header: {
    marginTop: '1em',
    marginBottom: '1em',
  },
  main: {
    padding: '1em',
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: '1fr 2fr',
  },
};

export const AdminSessionsPage = (props) => {
  const { classes } = props;

  const [progress, updateProgress] = useState('menu');

  const showPage = () => {
    switch (progress) {
      case State.menu: {
        return (<span>Menu</span>);
      }
      case State.voting: {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <LiveVotingTable />
          </Suspense>
        );
      }
      case State.summary: {
        return (<span>Summary</span>);
      }
      default:
        return (<span>Unknown</span>);
    }
  };

  const stateChange = state => () => updateProgress(state);

  return (
    <article className={classes.article}>
      <header className={classes.header}>
        <Typography variant="h2">
          Sessions Admin
        </Typography>
      </header>
      <ProgressSelector onStateChange={stateChange} />
      <main className={classes.main}>
        {showPage()}
      </main>
      <DebugPanel />
    </article>
  );
};

AdminSessionsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminSessionsPage);
