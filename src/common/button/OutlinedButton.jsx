import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Theme from 'Theme';

const styles = makeStyles({
  button: {
    backgroundColor: '#FFFFFF',
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
      backgroundColor: Theme.WHITE,
    },
  },
  buttonNeutral: {
    color: Theme.BLACK,
  },
  buttonGreen: {
    color: Theme.GREEN,
  },
  buttonOrange: {
    color: Theme.ORANGE,
  },
  buttonRed: {
    color: Theme.RED,
  },
});

const OutlinedButton = ({ color, children, onClick }) => {
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
      activeColor = classes.buttonNeutral;
    }
  }

  return (
    <button className={[classes.button, activeColor].join(' ')} onClick={onClick} type="button">
      {children}
    </button>
  );
};

OutlinedButton.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.string,
  onClick: PropTypes.func,
};

OutlinedButton.defaultProps = {
  children: '',
  onClick: () => {},
};

export default OutlinedButton;
