import React, { useEffect } from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SocketApi } from '../../../api';
import { adminStoreActions } from '../../../store/admin';

const styles = makeStyles({
  container: {
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  clientList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    marginTop: '0.5rem',
  },
  name: {
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
      <span>Participants:</span>
      <div className={classes.clientList}>
        {renderClients()}
      </div>
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
