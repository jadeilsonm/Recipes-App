import React, { useContext } from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import DrinkContext from '../context/DrinkContext';

const LIMIT_MAX_CARDS = 12;
const LIMIT_MAX_CATEGORY = 5;

export default function Drinks() {
  const { dataAllDrinks, dataCategory } = useContext(DrinkContext);
  console.log('category', dataCategory);
  const data = [...new Set(dataCategory)];
  console.log('data', data);
  return (
    <div>
      <Header title="Drinks" />
      Drinks
      {
        data.slice(0, LIMIT_MAX_CATEGORY).map(({ strCategory: cat }) => (
          <button key={ cat } type="button" data-testid={ `${cat}-category-filter` }>
            {cat}
          </button>
        ))
      }
      { dataAllDrinks.slice(0, LIMIT_MAX_CARDS).map(({ strDrinkThumb, strDrink }, i) => {
        console.log('');
        return <Cards key={ i } name={ strDrink } thumb={ strDrinkThumb } index={ i } />;
      })}
    </div>
  );
}
