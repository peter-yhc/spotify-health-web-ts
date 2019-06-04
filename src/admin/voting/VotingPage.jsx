import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import LiveVotingTable from './LiveVotingTable';
import SessionGenerator from './SessionGenerator';
import { ServerSocket } from '../../api';
import { adminStoreActions } from '../../store/admin';

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

export const VotingPage = ({ classes, dispatch }) => {
  useEffect(() => {
    const socket = ServerSocket.getSocket();
    socket.on('record vote', (data) => {
      console.log(data);
      dispatch(adminStoreActions.voteSubmitted({
        indicator: data.indicator,
        value: data.vote,
        username: data.client,
      }));
    });
  }, []);

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
  dispatch: PropTypes.func.isRequired,
};

export default connect()(withStyles(styles)(VotingPage));
