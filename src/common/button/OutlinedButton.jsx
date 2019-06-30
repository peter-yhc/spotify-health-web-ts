import React from 'react';
import PropTypes from 'prop-types';
import styles from './OutlinedButton.module.scss';

const OutlinedButton = ({ color, children, onClick }) => {
  let activeColor;
  switch (color) {
    case 'green': {
      activeColor = styles['button-green'];
      break;
    }
    case 'orange': {
      activeColor = styles['button-orange'];
      break;
    }
    case 'red': {
      activeColor = styles['button-red'];
      break;
    }
    default: {
      activeColor = styles['button-neutral'];
    }
  }

  return (
    <button className={[styles.button, activeColor].join(' ')} onClick={onClick} type="button">
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
