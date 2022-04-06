import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Search = styled.label`
  & input {
    /* text-align: center; */
    width: 100%;
    padding: 10px 25px;
    border: none;
    border-radius: 10px;
    background-color: #141921;
    color: #f8f8f8;
    font-size: 18px;
  }
`;
export default function Input({ label, type, name, value, onChange, dataTest }) {
  return (
    <Search htmlFor={ name }>
      <input
        placeholder={ label }
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
        data-testid={ dataTest }
      />
    </Search>
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
