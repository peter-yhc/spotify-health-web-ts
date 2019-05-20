import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import LiveVotingTable from './LiveVotingTable';
import DebugPanel from '../../debug-panel/DebugPanel';

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
  },
};

export const VotingPage = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <section className={classes.container}>
        <LiveVotingTable />
      </section>
      <DebugPanel />
    </React.Fragment>
  );
};

VotingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default function renderVotingPage() {
  return withStyles(styles)(VotingPage);
}
