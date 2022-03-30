import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FoodContext from './FoodContext';
import UserContext from './UserContext';
import fetchRecipesFoods from '../services/apiFood';

export default function FoodProvider({ children }) {
  const [data, setData] = useState([]);
  const { searchInfo } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    const { type, searchValue } = searchInfo;
    const fetchApi = async () => {
      if (type === 'letter' && searchValue.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }

      const result = await fetchRecipesFoods(type, searchValue);
      setData(result);
    };
    if (searchValue.length !== 0) fetchApi();
  }, [searchInfo]);

  useEffect(() => {
    const redirectToDetail = () => history.push(`/foods/${data[0].idMeal}`);
    if (data.length === 1) redirectToDetail();
  }, [data, history]);

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
