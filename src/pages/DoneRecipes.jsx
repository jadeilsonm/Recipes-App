import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import Button from '../components/Button';

export default function DoneRecipes() {
  const [filter, setFilter] = useState('');
  const [click, setClick] = useState(false);

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  const filters = () => doneRecipes.filter((recipe) => recipe.type.includes(filter));

  return (
    <div>
      <Header title="Done Recipes" hasSearch={ false } />
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
      {click && <alert>Link copied!</alert>}
      {doneRecipes && filters().map((recipe, index) => (
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
          <h5 data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</h5>
          <Button
            onClick={ () => {
              clipboardCopy(`http://localhost:3000/${recipe.type}s/${recipe.id}`);
              setClick(!click);
            } }
            label={
              <img
                src={ shareIcon }
                alt={ index }
                data-testid={ `${index}-horizontal-share-btn` }
              />
            }
          />
          {recipe.tags && recipe.tags.map((tag) => (
            <h3 key={ index } data-testid={ `${index}-${tag}-horizontal-tag` }>{tag}</h3>
          ))}
        </div>
      )) }

    </div>
  );
}
