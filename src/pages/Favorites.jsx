import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Menu from '../components/Menu';
import ShareButton from '../components/ShareButton';
import { LargeCard, ConteinerTabs } from './style';

const Conteiner = styled.div`
  background-color: #0C1015;
  width: 100%;
  height: 100vh;
  margin: 72px 0px 0 0px;
  justify-content: center;
`;

const Fav = styled.button`
  background-color: transparent ;
  border: none;
  padding: 5px;
  margin-left: 5px;
  margin-top: 11px;
  color: #D27842;
  font-size: 24px;
  margin-right: 5px;
`;

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
    <Conteiner>
      <Header title="Favorite Recipes" hasSearch={ false } />
      <Menu />
      <ConteinerTabs>
        <div
          onClick={ () => setFilter('') }
          role="button"
          tabIndex={ 0 }
          aria-hidden="true"
        >
          <p>All</p>
        </div>
        <div
          onClick={ () => setFilter('food') }
          role="button"
          tabIndex={ 0 }
          aria-hidden="true"
        >
          <p>Food</p>
        </div>
        <div
          onClick={ () => setFilter('drink') }
          role="button"
          tabIndex={ 0 }
          aria-hidden="true"
        >
          <p>Drinks</p>
        </div>
      </ConteinerTabs>
      {favoriteRecipes
        && filters().map((recipe, index) => (
          <LargeCard key={ index }>
            <Link
              key={ recipe.name }
              style={ { textDecoration: 'none' } }
              to={ `/${recipe.type}s/${recipe.id}` }
            >
              <div className="main">
                <img
                  src={ recipe.image }
                  alt={ index }
                  data-testid={ `${index}-horizontal-image` }
                />
                <div>

                  <h3 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h3>
                  <h4 data-testid={ `${index}-horizontal-top-text` }>
                    {`${recipe.nationality} ${recipe.alcoholicOrNot}
                    - ${recipe.category}`}
                  </h4>
                </div>
              </div>
            </Link>
            <ShareButton
              type={ recipe.type }
              id={ recipe.id }
              dataTest={ `${index}-horizontal-share-btn` }
            />
            <Fav
              type="button"
              onClick={ () => {
                removeFavoriteRecipe(recipe.id);
                setRemove(!remove);
              } }
            >
              <i className="fi fi-ss-trash" />
            </Fav>
          </LargeCard>
        ))}
    </Conteiner>
  );
}
