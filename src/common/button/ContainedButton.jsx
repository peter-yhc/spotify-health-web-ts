import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Theme from 'Theme';

const styles = makeStyles({
  button: {
    backgroundColor: Theme.BLACK,
    color: Theme.WHITE,
    padding: '12px',
    border: '0',
    borderRadius: '5px',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontFamily: 'inherit',
    fontSize: '14px',
    letterSpacing: '0.02857em',
    lineHeight: '18px',
    '&:hover': {
      backgroundColor: Theme.WHITE_DARKER,
    },
  },
  buttonGreen: {
    backgroundColor: Theme.GREEN,
    '&:hover': {
      backgroundColor: Theme.GREEN_DARKER,
    },
  },
  buttonOrange: {
    backgroundColor: Theme.ORANGE,
    '&:hover': {
      backgroundColor: Theme.ORANGE_DARKER,
    },
  },
  buttonRed: {
    backgroundColor: Theme.RED,
    '&:hover': {
      backgroundColor: Theme.RED_DARKER,
    },
  },
});

const ContainedButton = ({ color, children, onClick }) => {
  const classes = styles();
  let activeColor;
  switch (color) {
    case 'green': {
      activeColor = classes.buttonGreen;
      break;
    }
    case 'orange': {
      activeColor = classes.buttonOrange;
      break;
    }
    case 'red': {
      activeColor = classes.buttonRed;
      break;
    }
    default: {
      activeColor = '';
    }
  }

  return (
    <button className={[classes.button, activeColor].join(' ')} onClick={onClick} type="button">
      {children}
    </button>
  );
};

ContainedButton.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.string,
  onClick: PropTypes.func,
};

ContainedButton.defaultProps = {
  children: '',
  onClick: () => {
  },
};

export default ContainedButton;
