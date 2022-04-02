import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { string } from 'prop-types';

export default function StartRecipe({ id, type }) {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const inProgressRecipes = JSON.parse(
    localStorage.getItem('inProgressRecipes'),
  ) || { cocktails: {}, meals: {} };
  const history = useHistory();
  const cocktails = 'cocktails';
  const meals = 'meals';

  const done = doneRecipes.some((recipe) => recipe.id === id);
  const progressRecipes = Object.keys(
    inProgressRecipes[type === 'food' ? meals : cocktails],
  ).some((recipe) => recipe === id);
  return (
    <div>
      {!done && (
        <button
          style={ { position: 'fixed', bottom: '0px' } }
          onClick={ () => history.push(`/${type}s/${id}/in-progress`) }
          type="button"
          data-testid="start-recipe-btn"
        >
          {progressRecipes ? 'Continue Recipe' : 'Start Recipe'}
        </button>
      )}
    </div>
  );
}

StartRecipe.propTypes = {
  type: string,
  id: string,
}.isRequired;
