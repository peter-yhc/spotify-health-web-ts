import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { Divider, Paper } from '@material-ui/core';

const styles = {
  container: {
    float: 'right',
    position: 'absolute',
    right: '20px',
    bottom: '20px',
    border: '1px solid #ffbebe',
    height: '270px',
    width: '180px',
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
  },
  textInput: {
    // marginTop: '-1px',
    width: '165px',
  },
  inputbox: {
    '&:focus': {
      outline: 'none',
    },
    border: 'none',
    fontSize: '12px',
    fontFamily: 'Courier New',
  },
};

const DebugPanel = (props) => {
  const { classes } = props;
  const [history, updateHistory] = useState([]);

  const renderHistory = () => {
    return history.map((each) => {
      return (<span key={Math.random()}>{each}</span>);
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      updateHistory([...history, e.target.value]);
      e.target.value = '';
    }
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

export default withStyles(styles)(DebugPanel);
