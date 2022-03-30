import React from 'react';
import PropTypes from 'prop-types';

function Cards(props) {
  const { name, thumb, index, clickCard } = props;

  return (
    <div>
      <div
        data-testid={ `${index}-recipe-card` }
        onClick={ clickCard }
        role="button"
        tabIndex={ 0 }
        aria-hidden="true"
      >
        <img data-testid={ `${index}-card-img` } src={ thumb } alt="Thumb" />
        <h3 data-testid={ `${index}-card-name` }>{ name }</h3>
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
