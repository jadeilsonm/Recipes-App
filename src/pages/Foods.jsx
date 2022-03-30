import React, { useContext, useState, useEffect } from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import FoodContext from '../context/FoodContext';
import UserContext from '../context/UserContext';

const LIMIT_MAX_CARDS = 12;
const LIMIT_MAX_CATEGORY = 5;

export default function Foods() {
  const { dataCategory, dataAllFoods, data } = useContext(FoodContext);
  const [arrCards, setArrCard] = useState([]);
  const { handleSearchInfo } = useContext(UserContext);

  useEffect(() => {
    console.log('data', data);
    if (data.length !== 0) setArrCard(data);
    else setArrCard(dataAllFoods);
  }, [dataAllFoods, data]);

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
      { arrCards.slice(0, LIMIT_MAX_CARDS).map(({ strMealThumb, strMeal }, i) => {
        console.log('');
        return <Cards key={ i } name={ strMeal } thumb={ strMealThumb } index={ i } />;
      })}

    </div>
  );
}
