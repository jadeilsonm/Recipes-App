import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ConteinerTabs, LargeCard } from './style';
import Header from '../components/Header';
import Menu from '../components/Menu';
import ShareButton from '../components/ShareButton';

const Conteiner = styled.div`
  background-color: #0C1015;
  width: 100%;
  height: 100vh;
  margin: 72px 0px 50px 0px;
  justify-content: center;
`;

export default function DoneRecipes() {
  const [filter, setFilter] = useState('');

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  const filters = () => doneRecipes.filter((recipe) => recipe.type.includes(filter));

  return (
    <Conteiner>
      <Header title="Done Recipes" hasSearch={ false } />
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
      {doneRecipes && filters().map((recipe, index) => (
        <LargeCard key={ recipe.name }>
          <Link
            style={ { textDecoration: 'none' } }
            to={ `/${recipe.type}s/${recipe.id}` }
          >
            <div className="main" key={ index }>
              <img
                src={ recipe.image }
                alt={ index }
                data-testid={ `${index}-horizontal-image` }
              />
              <div>
                <h3 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h3>
                <h4 data-testid={ `${index}-horizontal-top-text` }>
                  {`${recipe.nationality} ${recipe.alcoholicOrNot} - ${recipe.category}`}
                </h4>
                <h5 data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</h5>
              </div>
              {recipe.tags && recipe.tags.map((tag) => (
                <h3
                  key={ index }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  {tag}
                </h3>
              ))}
            </div>
          </Link>
          <ShareButton type={ recipe.type } id={ recipe.id } />
        </LargeCard>
      ))}
    </Conteiner>
  );
}
