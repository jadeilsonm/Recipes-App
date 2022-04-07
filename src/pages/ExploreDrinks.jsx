import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { ContainerExplore } from './style';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Button from '../components/Button';
import DrinkContext from '../context/DrinkContext';

export default function ExploreDrinks() {
  const { filteredData } = useContext(DrinkContext);
  const maxLength = 12;
  const newFilter = filteredData.slice(0, maxLength);
  const history = useHistory();
  const { handleSearchInfo } = useContext(UserContext);
  const location = useLocation();
  const magicNumber = 9;
  const path = location.pathname.slice(magicNumber);

  return (
    <ContainerExplore>
      <Header title="Explore Drinks" hasSearch={ false } />
      <Menu />
      <Button
        label="By Ingredient"
        dataTest="explore-by-ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
      />
      <Button
        label="Surprise me!"
        dataTest="explore-surprise"
        onClick={ () => {
          handleSearchInfo('random', '', path);
        } }
      />
      { newFilter.length > 0 && newFilter.map((filterDrink, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ filterDrink.strDrink }>
          <img
            data-testid={ `${index}-card-img` }
            src={ filterDrink.strDrinkThumb }
            alt={ filterDrink.strDrink }
          />
          <h4 data-testid={ `${index}-card-name` }>{ filterDrink.strDrink }</h4>
        </div>
      ))}
    </ContainerExplore>
  );
}

ExploreDrinks.propTypes = {
  location: PropTypes.object,
  state: PropTypes.object,
}.isRequired;
