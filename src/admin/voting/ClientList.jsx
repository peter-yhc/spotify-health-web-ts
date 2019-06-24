import React, { useEffect } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SocketApi } from '../../api';
import { adminStoreActions } from '../../store/admin';

const styles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  },
  name: {
    padding: '0.5em',
    textAlign: 'left',
  },
});

export const ClientList = ({ dispatch, sessionId, clients }) => {
  const classes = styles();

  useEffect(() => {
    if (sessionId) {
      SocketApi.registerHook('participant joined', (data) => {
        dispatch(adminStoreActions.clientJoined(data.participant));
      });
    }
  }, [dispatch, sessionId]);

  const renderClients = () => {
    if (!clients || clients.length === 0) {
      return (<span className={classes.name}>No one has joined this session yet...</span>);
    }
    return clients.map(client => (
      <span className={classes.name} key={client.id}>{client.name}</span>
    ));
  };

  return (
    <Paper className={classes.container}>
      {renderClients()}
    </Paper>
  );
};

ClientList.defaultProps = {
  sessionId: undefined,
};

ClientList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sessionId: PropTypes.string,
  clients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  sessionId: state.adminStoreReducer.session.id,
  clients: Object.values(state.adminStoreReducer.clients),
});

export default connect(mapStateToProps)(ClientList);
