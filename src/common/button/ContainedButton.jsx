import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContainedButton.module.scss';

const ContainedButton = ({ color, children, onClick }) => {
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

ContainedButton.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.string,
  onClick: PropTypes.func,
};

ContainedButton.defaultProps = {
  children: '',
  onClick: () => {},
};

export default ContainedButton;
