import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import styled from 'styled-components';
import { ConteinerTabs } from './style';
import Header from '../components/Header';
import Menu from '../components/Menu';

const ConteinerRecipes = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  width: 90%;
  border-radius: 25px;
  background: linear-gradient(145deg, rgba(38,43,52,1) 0%, rgba(12,15,20,1) 100%);
  margin: 9px;
  & .main {
    display: flex;
    margin: 5px;
    color: #f2f2f2;
  }
  & h3 {
    font-size: 18px;
    font-weight: 600;
    background: transparent;
  }
  & h4, h5 {
    font-size: 12px;
  }
  & img {
    width: 30%;
    /* height: 30%; */
    border-radius: 25px;
    background: transparent;
    padding: 10px;
    margin-right: 10px;
  } 
`;
const Conteiner = styled.div`
  background-color: #0C1015;
  width: 100%;
  height: 100vh;
  margin: 72px 0px 50px 0px;
  justify-content: center;
`;
const Share = styled.button`
  background-color: transparent ;
  border: none;
  padding: 5px;
  margin: 3px;
  color: #4F5054;
  font-size: 24px;
  & :hover, :active  {
    color: #D27842;
  }
`;

export default function DoneRecipes() {
  const [filter, setFilter] = useState('');
  const [click, setClick] = useState(false);

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
      {click && <alert>Link copied!</alert>}
      {doneRecipes && filters().map((recipe, index) => (
        <ConteinerRecipes key={ recipe.name }>
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
          <Share
            type="button"
            onClick={ () => {
              clipboardCopy(`http://localhost:3000/${recipe.type}s/${recipe.id}`);
              setClick(!click);
            } }
          >
            <i className="fi fi-ss-share" />
          </Share>
        </ConteinerRecipes>
      ))}
    </Conteiner>
  );
}
