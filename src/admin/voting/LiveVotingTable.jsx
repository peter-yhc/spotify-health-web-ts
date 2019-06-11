/* eslint-disable react/prefer-stateless-function */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core/index';
import { connect } from 'react-redux';
import { SocketApi } from '../../api';
import { adminStoreActions } from '../../store/admin';

export const LiveVotingTable = ({ dispatch, sessionId, indicatorVotes }) => {
  useEffect(() => {
    if (sessionId) {
      SocketApi.registerHook('vote accepted', (data) => {
        dispatch(adminStoreActions.voteSubmitted({
          indicator: data.indicator,
          value: data.vote,
          client: data.client,
        }));
      });
    }
  }, [sessionId]);

  const generateTableBody = () => {
    return indicatorVotes.map(result => (
      <TableRow key={result.indicator}>
        <TableCell>{result.indicator}</TableCell>
        <TableCell>{result.unhappyVotes}</TableCell>
        <TableCell>{result.neutralVotes}</TableCell>
        <TableCell>{result.happyVotes}</TableCell>
      </TableRow>
    ));
  };

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Indicators</TableCell>
            <TableCell>Unhappy</TableCell>
            <TableCell>Neutral</TableCell>
            <TableCell>Happy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {generateTableBody()}
        </TableBody>
      </Table>
    </Paper>
  );
};

LiveVotingTable.propTypes = {
  indicatorVotes: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  sessionId: PropTypes.string,
};

LiveVotingTable.defaultProps = {
  sessionId: undefined,
};

const mapStateToProps = state => ({
  indicatorVotes: Object.values(state.adminStoreReducer.clientVotes),
  sessionId: state.adminStoreReducer.session.id,
});

export default connect(mapStateToProps)(LiveVotingTable);
