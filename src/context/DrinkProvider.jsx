import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import DrinkContext from './DrinkContext';
import UserContext from './UserContext';
import fetchRecipesDrinks from '../services/apiDrink';

export default function DrinkProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [dataAllDrinks, setDataAllDrinks] = useState([]);
  const { searchInfo } = useContext(UserContext);
  useEffect(() => {
    const { type, searchValue, model } = searchInfo;
    const fetchApi = async () => {
      if (type === 'letter' && searchValue.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }

      const result = await fetchRecipesDrinks(type, searchValue);
      setData(result);
    };
    if (searchValue.length !== 0 && model === 'drinks') return fetchApi();
  }, [searchInfo]);

  useEffect(() => {
    const fetchAllDrinks = async () => {
      const responseDrinks = await fetchRecipesDrinks('name', '');
      const responseCategory = await fetchRecipesDrinks('category', '');
      setDataCategory(responseCategory);
      setDataAllDrinks(responseDrinks);
    };
    fetchAllDrinks();
  }, []);

  const contextValue = {
    data,
    dataCategory,
    dataAllDrinks,
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
