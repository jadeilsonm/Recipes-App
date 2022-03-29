import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';
import UserContext from './UserContext';
import fetchRecipesFoods from '../services/apiFood';

export default function FoodProvider({ children }) {
  const [data, setData] = useState([]);
  const { searchInfo } = useContext(UserContext);
  useEffect(() => {
    const { type, searchValue } = searchInfo;
    const fetchApi = async () => {
      if (type === 'letter' && searchValue.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }

      const result = await fetchRecipesFoods(type, searchValue);
      setData(result);
    };
    if (type.length !== 0) return fetchApi();
  }, [searchInfo]);

  const contextValue = {
    data,
  };

  return (
    <FoodContext.Provider value={ contextValue }>
      { children }
    </FoodContext.Provider>
  );
}
FoodProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;
