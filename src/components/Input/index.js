import PropTypes from 'prop-types';
import React from 'react';

function Input({
  name, onChange, value, id, type, disabled, checked, onClick,
}) {
  return (
    <label htmlFor={id}>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        disabled={disabled}
        checked={checked}
        onClick={onClick}
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Input;
