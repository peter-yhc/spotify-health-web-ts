import React, { useEffect, useReducer } from 'react';
import { Paper, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { ServerApi } from '../api';

const styles = {
  textField: {
    width: '400px',
  },
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'complete': {
      return { status: 1, sessionLink: action.sessionLink };
    }
    default:
      return state;
  }
};

const SessionGenerator = (props) => {
  const { classes } = props;
  const [state, dispatch] = useReducer(stateReducer, { status: 0, sessionLink: 'Retrieving...' });

  useEffect(() => {
    const createSession = async () => {
      const sessionLink = await ServerApi.createSession();
      dispatch({ type: 'complete', sessionLink });
    };
    createSession();
  }, []);

  return (
    <Paper>
      <TextField
        id="filled-read-only-input"
        label="Session link"
        value={state.sessionLink}
        margin="normal"
        InputProps={{ readOnly: true }}
        variant="filled"
        className={classes.textField}
      />
    </Paper>
  );
};

SessionGenerator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SessionGenerator);
