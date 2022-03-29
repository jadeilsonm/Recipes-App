import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ label, type, name, value, onChange, dataTest }) {
  return (
    <label htmlFor={ name }>
      { label }
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
        data-testid={ dataTest }
      />
    </label>
  );
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  dataTest: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  name: '',
  dataTest: '',
  value: '',
  onChange: null,
};
