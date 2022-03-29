import React from 'react';
import PropTypes from 'prop-types';

function Cards(props) {
  const { name, thumb, index } = props;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img data-testid={ `${index}-card-img` } src={ thumb } alt="Thumb" />
      <h3 data-testid={ `${index}-card-name` }>{ name }</h3>
    </div>
  );
}

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Cards;
