import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { LiveVotingTable, ProgressSelector, SelectionMenu, State } from './components';
import DebugPanel from '../debug-panel/DebugPanel';

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
  const { classes } = props;
  const [progress, updateProgress] = useState(State.menu);

  const showPage = () => {
    switch (progress) {
      case State.menu: {
        return (<SelectionMenu />);
      }
      case State.voting: {
        return (<LiveVotingTable />);
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
        <ProgressSelector onStateChange={stateChange} />
      </header>
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
