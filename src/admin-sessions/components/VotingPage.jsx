import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import LiveVotingTable from './LiveVotingTable';

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
    </React.Fragment>
  );
};

VotingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default function renderVotingPage() {
  return withStyles(styles)(VotingPage);
}
