import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import DrinkContext from './DrinkContext';
import UserContext from './UserContext';
import fetchRecipesDrinks from '../services/apiDrink';

export default function DrinkProvider({ children }) {
  const [filteredData, setFilteredData] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [dataAllDrinks, setDataAllDrinks] = useState([]);
  const [dataIngredients, setDataIngredients] = useState([]);
  const { searchInfo } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    const { type, searchValue, model } = searchInfo;
    const fetchApi = async () => {
      if (type === 'letter' && searchValue.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      const result = await fetchRecipesDrinks(type, searchValue);
      if (result === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      }
      if (result === null) return setFilteredData([]);
      setFilteredData(result);
    };

    if (type.length !== 0 && model === 'drinks') fetchApi();
  }, [searchInfo]);

  useEffect(() => {
    const redirectToDetail = () => history.push(`/drinks/${filteredData[0].idDrink}`);
    const goToDrinkDetail = () => redirectToDetail();
    if (filteredData.length === 1) goToDrinkDetail();
  }, [filteredData, history]);

  useEffect(() => {
    const fetchAllDrinks = async () => {
      const responseDrinks = await fetchRecipesDrinks('name', '');
      const responseCategory = await fetchRecipesDrinks('category', '');
      setDataCategory(responseCategory);
      setDataAllDrinks(responseDrinks);
    };
    fetchAllDrinks();
  }, []);

  useEffect(() => {
    const fetchIngredientsDrinks = async () => {
      const maxLength = 12;
      const responseIngredients = await fetchRecipesDrinks('ingredient', '');
      setDataIngredients(responseIngredients.slice(0, maxLength));
    };
    fetchIngredientsDrinks();
  }, []);

  const contextValue = {
    filteredData,
    dataCategory,
    dataAllDrinks,

    dataIngredients,
  };

  return (
    <DrinkContext.Provider value={ contextValue }>
      { children }
    </DrinkContext.Provider>
  );
}
DrinkProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;
