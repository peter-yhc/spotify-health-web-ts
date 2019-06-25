import React, { useEffect } from 'react';
import { InputBase, Paper } from '@material-ui/core/index';
import { makeStyles } from '@material-ui/styles/index';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './SessionGenerator.css';
import { adminStoreActions } from '../../../store/admin';

const styles = makeStyles({
  container: {
    padding: '0.5rem 0.5rem 0 0.5rem',
    position: 'relative',
    height: '50px',
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
});

export const SessionGenerator = ({ dispatch, sessionId, sessionLink }) => {
  const popup = React.createRef();
  const classes = styles();

  useEffect(() => {
    dispatch(adminStoreActions.registerSession());
  }, [dispatch]);

  const handleClick = () => {
    if (!sessionId) {
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
      <span>Share this session link with your team members:</span>
      <InputBase
        id="session-link-field"
        value={sessionLink}
        className={classes.textField}
      />
    </Paper>
  );
};

SessionGenerator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sessionId: PropTypes.string,
  sessionLink: PropTypes.string.isRequired,
};

SessionGenerator.defaultProps = {
  sessionId: undefined,
};

const mapStateToProps = state => ({
  sessionId: state.adminStoreReducer.session.id,
  sessionLink: state.adminStoreReducer.session.link,
});

export default connect(mapStateToProps)(SessionGenerator);
