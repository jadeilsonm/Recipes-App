import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clipboardCopy from 'clipboard-copy';
import Button from './Button';
import shareIcon from '../images/shareIcon.svg';

export default function ShareButton({ type, id, dataTest }) {
  const [click, setClick] = useState(false);
  return (
    <div>
      {click && <p>Link copied!</p>}
      <Button
        onClick={ () => {
          clipboardCopy(
            `http://localhost:3000/${type}s/${id}`,
          );
          setClick(!click);
        } }
        label={
          <img
            src={ shareIcon }
            alt={ shareIcon }
            data-testid={ dataTest }
          />
        }
      />
    </div>
  );
}
ShareButton.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
};
