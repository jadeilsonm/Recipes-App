import React, { useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Button from './Button';

export default function FavButton({ id, recipeDetail, dataTest }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

  const addFavorite = () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(
      [...favoriteRecipes, recipeDetail],
    ));
    setIsFavorite(!isFavorite);
  };
  const removeFavorite = () => {
    const filter = favoriteRecipes.filter((recipe) => !recipe.id.includes(id));
    localStorage.setItem('favoriteRecipes', JSON.stringify(filter));
    setIsFavorite(!isFavorite);
  };
  const favoriteIcon = favoriteRecipes.some((recipe) => recipe.id === id);
  return (
    <Button
      onClick={
        favoriteIcon ? removeFavorite : addFavorite
      }
      label={
        <img
          src={ favoriteIcon ? blackHeartIcon : whiteHeartIcon }
          alt="favorite button"
          data-testid={ dataTest }
        />
      }
    />
  );
}
FavButton.propTypes = {
  id: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  recipeDetail: PropTypes.objectOf(PropTypes.string),
};
FavButton.defaultProps = {
  recipeDetail: {},
};
