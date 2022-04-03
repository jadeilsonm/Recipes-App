import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

export default function IngredientCard(props) {
  const { name, thumb, index, clickCard, type } = props;
  const { handleSearchInfo } = useContext(UserContext);

  return (
    <Link
      data-testid={ `${index}-ingredient-card` }
      key={ name }
      onClick={
        () => handleSearchInfo('filterByIngredient', name, type)
      }
      to={ `/explore/${type}` }
    >
      <div
        onClick={ clickCard }
        role="button"
        tabIndex={ 0 }
        aria-hidden="true"
        style={ { width: '100%', textAlign: 'center' } }
      >
        <div data-testid={ `${index}-recipe-card` }>
          <img
            style={ { width: '30%' } }
            data-testid={ `${index}-card-img` }
            src={ thumb }
            alt="Thumb"
          />
          <h3 data-testid={ `${index}-card-name` }>{ name }</h3>
        </div>
      </div>

    </Link>
  );
}

IngredientCard.propTypes = {
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  clickCard: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
