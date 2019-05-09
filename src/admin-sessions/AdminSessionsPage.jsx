import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import LiveVotingTable from './LiveVotingTable';
import DebugPanel from '../debug-panel/DebugPanel';

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

  return (
    <article className={classes.article}>
      <header className={classes.header}>
        <Typography variant="h2">
          Sessions Admin
        </Typography>
      </header>
      <main className={classes.main}>
        <LiveVotingTable />
      </main>
      <DebugPanel />
    </article>
  );
};

AdminSessionsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminSessionsPage);
