import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import LiveVotingTable from './LiveVotingTable';
import SessionGenerator from './SessionGenerator';

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'minmax(auto, 100px) 3fr 50px 2fr minmax(auto, 100px)',
  },
  main: {
    gridColumn: '2 / 3',
  },
  aside: {
    gridColumn: '4 / 5',
  },
};

export const VotingPage = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <section className={classes.container}>
        <div className={classes.main}>
          <LiveVotingTable />
        </div>
        <div className={classes.aside}>
          <SessionGenerator />
        </div>
      </section>
    </React.Fragment>
  );
};

VotingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VotingPage);
