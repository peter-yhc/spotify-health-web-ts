import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: '',
  onClick: () => {},
};
export default Button;
