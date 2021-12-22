import React from 'react';
import './Button.scss';

const STYLES = ['btn--primary', 'btn--solid'];

const SIZES = ['btn-small', 'btn--medium', 'btn--large', 'btn--Big'];

export const Button = ({
  children,
  props,
  type,
  disabled,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
