import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ label, onClick, dataTest }) {
  return (
    <button type="button" onClick={ onClick } data-testid={ dataTest }>
      { label }
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
};
