import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import DrinkContext from './DrinkContext';
import UserContext from './UserContext';
import fetchRecipesDrinks from '../services/apiDrink';

export default function DrinkProvider({ children }) {
  const [data, setData] = useState([]);
  const { searchInfo } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    const { type, searchValue } = searchInfo;
    const fetchApi = async () => {
      if (type === 'letter' && searchValue.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }

      const result = await fetchRecipesDrinks(type, searchValue);
      setData(result);
    };

    if (searchValue.length !== 0) fetchApi();
  }, [searchInfo]);

  useEffect(() => {
    const redirectToDetail = () => history.push(`/drinks/${data[0].idDrink}`);
    const goToDrinkDetail = () => redirectToDetail();
    if (data.length === 1) goToDrinkDetail();
  }, [data, history]);

  const contextValue = {
    data,
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
