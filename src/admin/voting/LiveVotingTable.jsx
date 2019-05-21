/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core/index';
import { connect } from 'react-redux';

export class LiveVotingTable extends Component {
  generateTableBody() {
    const { indicatorVotes } = this.props;
    return indicatorVotes.map((result) => {
      return (
        <TableRow key={result.indicator}>
          <TableCell>{result.indicator}</TableCell>
          <TableCell>{result.unhappyVotes}</TableCell>
          <TableCell>{result.neutralVotes}</TableCell>
          <TableCell>{result.happyVotes}</TableCell>
        </TableRow>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
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
              {this.generateTableBody()}
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    );
  }
}

LiveVotingTable.propTypes = {
  indicatorVotes: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    indicatorVotes: Object.values(state.adminSessionReducer.indicatorVotes),
  };
};

export default connect(mapStateToProps)(LiveVotingTable);
