import React, { useEffect, useReducer } from 'react';
import { InputBase, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { ServerApi } from '../api';
import './SessionGenerator.css';

const styles = {
  container: {
    padding: '0.5rem 0.5rem 0 0.5rem',
    position: 'relative',
    height: '50px',
    width: '410px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  textField: {
    width: '100%',
  },
  popupText: {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    opacity: 0,
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

export const SessionGenerator = (props) => {
  const { classes } = props;
  const [state, dispatch] = useReducer(stateReducer, { status: 0, sessionLink: 'Retrieving...' });
  const popup = React.createRef();

  useEffect(() => {
    const createSession = async () => {
      const sessionLink = await ServerApi.createSession();
      dispatch({ type: 'complete', sessionLink });
    };
    createSession();
  }, []);

  const handleClick = () => {
    if (state.status === 0) {
      return;
    }

    const copyText = document.querySelector('#session-link-field');
    copyText.select();
    document.execCommand('copy');
    popup.current.classList.add('popup-animate');
    popup.current.addEventListener('animationend', () => {
      popup.current.classList.remove('popup-animate');
    });
  };

  return (
    <Paper className={classes.container} onClick={handleClick}>
      <span className={classes.popupText} ref={popup}>Copied</span>
      <span>Session Link</span>
      <InputBase
        id="session-link-field"
        value={state.sessionLink}
        className={classes.textField}
      />
    </Paper>
  );
};

SessionGenerator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SessionGenerator);
