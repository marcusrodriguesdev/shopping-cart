/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

function Input({
  name, onChange, value, id, type, disabled, checked,
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
      />
    </label>
  );
}

export default Input;
