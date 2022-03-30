import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Cards from '../components/Cards';
import Header from '../components/Header';
import FoodContext from '../context/FoodContext';
import UserContext from '../context/UserContext';

const LIMIT_MAX_CARDS = 12;
const LIMIT_MAX_CATEGORY = 5;

export default function Foods() {
  const { dataCategory, dataAllFoods, data } = useContext(FoodContext);
  // const [isFilter, setIsFilter] = useState(false);
  const [isFilterAll, setIsFilterAll] = useState(false);
  const [arrCards, setArrCard] = useState([]);
  const { handleSearchInfo } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    console.log('data', data);
    // console.log(dataAllFoods);
    if (data.length !== 0) setArrCard(data);
    else setArrCard(dataAllFoods);
    if (isFilterAll) setArrCard(dataAllFoods);
  }, [dataAllFoods, data, isFilterAll]);

  // const clickByCategory = () => {
  //   console.log('click');
  // handleSearchInfo('filterByCategory', cat, 'foods')
  //   setIsFilter(!isFilter);
  // };

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
            onClick={ () => handleSearchInfo('filterByCategory', cat, 'foods') }
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

    </div>
  );
}
