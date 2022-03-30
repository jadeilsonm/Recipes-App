import React from 'react';
import PropTypes from 'prop-types';

function Cards(props) {
  const { name, thumb, index, clickCard } = props;

  return (
    <div
      onClick={ clickCard }
      role="button"
      tabIndex={ 0 }
      aria-hidden="true"
      style={ { width: '100%', textAlign: 'center' } }
    >

      <div data-testid={ `${index}-recipe-card` }>
        <h3 data-testid={ `${index}-card-name` }>{ name }</h3>
        <img
          style={ { width: '80%' } }
          data-testid={ `${index}-card-img` }
          src={ thumb }
          alt="Thumb"
        />
      </div>
    </div>
  );
}

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  clickCard: PropTypes.func.isRequired,
};

export default Cards;
