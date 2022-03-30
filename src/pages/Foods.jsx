import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Menu from '../components/Menu';

import FoodContext from '../context/FoodContext';
import UserContext from '../context/UserContext';

const LIMIT_MAX_CARDS = 12;
const LIMIT_MAX_CATEGORY = 5;

export default function Foods() {
  const { dataCategory, dataAllFoods, data } = useContext(FoodContext);
  const [filter, setFilter] = useState([]);
  const [isFilterAll, setIsFilterAll] = useState(false);
  const [arrCards, setArrCard] = useState([]);
  const { handleSearchInfo } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (data.length !== 0) {
      setArrCard(data);
      setIsFilterAll(false);
    } else setArrCard(dataAllFoods);
    if (isFilterAll) setArrCard(dataAllFoods);
  }, [dataAllFoods, data, isFilterAll]);

  const clickByCategory = (value) => {
    console.log(filter.includes(value));
    if (filter.includes(value)) {
      setFilter([]);
      setIsFilterAll(true);
    } else {
      setFilter([value]);
      handleSearchInfo('filterByCategory', value, 'foods');
    }
  };

  return (
    <div>
      <Header title="Foods" />
      Foods
      {
        dataCategory.slice(0, LIMIT_MAX_CATEGORY).map(({ strCategory: cat }) => (
          <button
            key={ cat }
            type="button"
            value={ cat }
            data-testid={ `${cat}-category-filter` }
            onClick={ ({ target: { value } }) => clickByCategory(value) }
          >
            {cat}
          </button>
        ))
      }
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => setIsFilterAll(true) }
      >
        All
      </button>
      { arrCards.slice(0, LIMIT_MAX_CARDS).map(({ strMealThumb, strMeal, idMeal }, i) => {
        const clickCard = () => history.push(`/foods/${idMeal}`);
        return (<Cards
          key={ i }
          name={ strMeal }
          id={ idMeal }
          thumb={ strMealThumb }
          clickCard={ clickCard }
          index={ i }
        />);
      })}
      <Menu />
    </div>
  );
}
