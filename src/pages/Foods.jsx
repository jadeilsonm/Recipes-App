import React, { useContext } from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import FoodContext from '../context/FoodContext';

const LIMIT_MAX_CARDS = 12;
const LIMIT_MAX_CATEGORY = 5;

export default function Foods() {
  const { dataCategory, dataAllFoods } = useContext(FoodContext);
  console.log(dataCategory);
  return (
    <div>

      <Header title="Foods" />
      Foods
      {
        dataCategory.slice(0, LIMIT_MAX_CATEGORY).map(({ strCategory: cat }) => (
          <button key={ cat } type="button" data-testid={ `${cat}-category-filter` }>
            {cat}
          </button>
        ))
      }
      { dataAllFoods.slice(0, LIMIT_MAX_CARDS).map(({ strMealThumb, strMeal }, i) => {
        console.log('');
        return <Cards key={ i } name={ strMeal } thumb={ strMealThumb } index={ i } />;
      })}

    </div>
  );
}
