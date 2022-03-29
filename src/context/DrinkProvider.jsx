import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import DrinkContext from './DrinkContext';
import UserContext from './UserContext';
import fetchRecipesDrinks from '../services/apiDrink';

export default function DrinkProvider({ children }) {
  const [data, setData] = useState([]);
  const { searchInfo } = useContext(UserContext);
  useEffect(() => {
    const { type, searchValue } = searchInfo;
    const fetchApi = async () => {
      if (type === 'letter' && searchValue.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }

      const result = await fetchRecipesDrinks(type, searchValue);
      setData(result);
    };
    if (searchValue.length !== 0) return fetchApi();
  }, [searchInfo]);

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
