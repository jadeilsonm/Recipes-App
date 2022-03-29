import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ label, onClick }) {
  return (
    <button type="button" onClick={ onClick }>
      { label }
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
