import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import UserContext from '../context/UserContext';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Button from '../components/Button';
import FoodContext from '../context/FoodContext';

export default function ExploreFoods() {
  const { filteredData } = useContext(FoodContext);
  const maxLength = 12;

  const newFilter = filteredData.slice(0, maxLength);
  const history = useHistory();

  const { handleSearchInfo } = useContext(UserContext);
  const location = useLocation();
  const magicNumber = 9;
  const path = location.pathname.slice(magicNumber);
  
  return (
    <div>
      <Header title="Explore Foods" hasSearch={ false } />
      <Menu />
      <Button
        label="By Ingredient"
        dataTest="explore-by-ingredient"
        onClick={ () => history.push('/explore/foods/ingredients') }
      />
      <Button
        label="By Nationality"
        dataTest="explore-by-nationality"
        onClick={ () => history.push('/explore/foods/nationalities') }
      />
      <Button
        label="Surprise me!"
        dataTest="explore-surprise"
        onClick={ () => {
          handleSearchInfo('random', '', path);
        } }
      />
      { newFilter.length > 0 && newFilter.map((filterFood, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ filterFood.strMeal }>
          <img
            data-testid={ `${index}-card-img` }
            src={ filterFood.strMealThumb }
            alt={ filterFood.strMeal }
          />
          <h4 data-testid={ `${index}-card-name` }>{ filterFood.strMeal }</h4>
        </div>
      ))}
    </div>
  );
}
