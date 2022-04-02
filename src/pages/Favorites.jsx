import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Button from '../components/Button';
import ShareButton from '../components/ShareButton';

export default function Favorites() {
  const [filter, setFilter] = useState('');
  const [remove, setRemove] = useState(false);

  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const filters = () => favoriteRecipes.filter((recipe) => recipe.type.includes(filter));

  const removeFavoriteRecipe = (id) => {
    const tests = favoriteRecipes.filter((recipe) => !recipe.id.includes(id));
    localStorage.setItem('favoriteRecipes', JSON.stringify(tests));
  };
  return (
    <div>

      <Header title="Favorite Recipes" hasSearch={ false } />
      <Button
        dataTest="filter-by-all-btn"
        onClick={ () => setFilter('') }
        label="All"
      />
      <Button
        dataTest="filter-by-food-btn"
        onClick={ () => setFilter('food') }
        label="Food"
      />
      <Button
        dataTest="filter-by-drink-btn"
        onClick={ () => setFilter('drink') }
        label="Drinks"
      />
      {favoriteRecipes
        && filters().map((recipe, index) => (
          <div key={ index } style={ { width: '100%', border: '1px solid black' } }>
            <Link key={ recipe.name } to={ `/${recipe.type}s/${recipe.id}` }>
              <img
                style={ { width: '20%' } }
                src={ recipe.image }
                alt={ index }
                data-testid={ `${index}-horizontal-image` }
              />
              <h3 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h3>
            </Link>
            <h4 data-testid={ `${index}-horizontal-top-text` }>
              {`${recipe.nationality} ${recipe.alcoholicOrNot} - ${recipe.category}`}
            </h4>
            <ShareButton
              type={ recipe.type }
              id={ recipe.id }
              dataTest={ `${index}-horizontal-share-btn` }
            />
            <Button
              onClick={ () => {
                removeFavoriteRecipe(recipe.id);
                setRemove(!remove);
              } }
              label={
                <img
                  src={ blackHeartIcon }
                  alt={ index }
                  data-testid={ `${index}-horizontal-favorite-btn` }
                />
              }
            />
          </div>
        ))}
    </div>
  );
}
