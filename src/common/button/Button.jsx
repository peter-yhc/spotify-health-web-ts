import React from 'react';
import PropTypes from 'prop-types';
import OutlinedButton from './OutlinedButton';
import ContainedButton from './ContainedButton';

const Button = ({ children, onClick, color, variant }) => {
  return (() => {
    if (variant === 'outline') {
      return (
        <OutlinedButton color={color} onClick={onClick}>
          {children}
        </OutlinedButton>
      );
    }
    return (
      <ContainedButton color={color} onClick={onClick}>
        {children}
      </ContainedButton>
    );
  })();
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['green', 'orange', 'red', 'neutral']),
  variant: PropTypes.oneOf(['contained', 'outline']).isRequired,
};

Button.defaultProps = {
  children: '',
  onClick: () => {},
  color: 'neutral',
};
export default Button;
