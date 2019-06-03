import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Divider, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClientSessionActions from '../store/client/client-store-actions';
import AdminSessionActions from '../store/admin/admin-store-actions';
import { Types } from '../store/debug/debug-panel-reducer';

const styles = {
  container: {
    float: 'right',
    position: 'absolute',
    right: '20px',
    bottom: '20px',
    border: '1px solid #ffbebe',
    height: '270px',
    width: '230px',
  },
  textHistory: {
    height: '240px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontFamily: 'Courier New',
    fontSize: '12px',
    boxSizing: 'border-box',
    padding: '0.5em',
    overflow: 'scroll',
    textAlign: 'left',
  },
  textInput: {
    width: '165px',
    height: '30px',
    display: 'flex',
    flexDirection: 'row',
  },
  inputbox: {
    '&:focus': {
      outline: 'none',
    },
    border: 'none',
    fontSize: '12px',
    fontFamily: 'Courier New',
    flex: 1,
    height: '25px',
    marginLeft: '4px',
  },
  hintText: {
    color: '#0c5d5a',
  },
  userText: {
    color: '#2e46ff',
  },
  systemText: {
    color: '#afafaf',
  },
};

const isShowIndicatorCommand = (dispatch, command) => {
  const regex = /show "([A-Za-z@!?\\., ]+)" "([A-Za-z!?\\., ]+)" "([A-Za-z!?\\., ]+)"/g;
  const match = regex.exec(command);
  if (match) {
    dispatch(ClientSessionActions.displayHealthIndicator({
      indicator: match[1],
      textAwesome: match[2],
      textCrap: match[3],
    }));
  }
};

const isVoteSubmittedEvent = (dispatch, command) => {
  const regex = /vote "([A-Za-z0-9@!?\\., ]+)" "(\bhappy\b|\bunhappy\b|\bneutral\b)" "username"/g;
  const match = regex.exec(command);
  if (match) {
    dispatch(AdminSessionActions.voteSubmitted({
      indicator: match[1],
      value: match[2],
      username: match[3],
    }));
  }
};

const showDebugInput = (dispatch, textinput) => {
  dispatch({
    type: 'DEBUG_INPUT',
    input: textinput,
  });
};

const DebugPanel = (props) => {
  const { classes, history, dispatch } = props;

  const renderHistory = () => {
    return history.map((each) => {
      let className;

      if (Types.user === each.type) {
        className = classes.userText;
      } else if (Types.hint === each.type) {
        className = classes.hintText;
      } else {
        className = classes.systemText;
      }

      return (<span key={Math.random()} className={className}>{each.text}</span>);
    });
  };

  const handleKeyDown = (e) => {
    const textinput = e.target.value;
    if (e.key !== 'Enter') {
      return; // do nothing
    }
    e.target.value = '';
    showDebugInput(dispatch, textinput);
    isShowIndicatorCommand(dispatch, textinput);
    isVoteSubmittedEvent(dispatch, textinput);
  };

  return (
    <React.Fragment>
      <Paper className={classes.container}>
        <section className={classes.textHistory}>
          {renderHistory()}
        </section>
        <Divider />
        <section className={classes.textInput}>
          <input
            className={classes.inputbox}
            placeholder="enter commands"
            onKeyDown={handleKeyDown}
          />
        </section>
      </Paper>
    </React.Fragment>
  );
};

DebugPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    history: state.debugPanelReducer.history,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(DebugPanel));
