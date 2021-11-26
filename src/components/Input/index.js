import PropTypes from 'prop-types';
import React from 'react';

function Input({
  name, onChange, value, id, type,
}) {
  return (
    <label htmlFor={id}>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
