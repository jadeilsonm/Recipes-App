import React, { useContext, useState, useEffect } from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import DrinkContext from '../context/DrinkContext';
import UserContext from '../context/UserContext';

const LIMIT_MAX_CARDS = 12;
const LIMIT_MAX_CATEGORY = 5;

export default function Drinks() {
  const { dataAllDrinks, dataCategory, data } = useContext(DrinkContext);
  const [arrCards, setArrCard] = useState([]);
  const { handleSearchInfo } = useContext(UserContext);

  useEffect(() => {
    if (data.length !== 0) setArrCard(data);
    else setArrCard(dataAllDrinks);
  }, [dataAllDrinks, data]);

  const newArrCategory = [...new Set(dataCategory)];

  return (
    <div>
      <Header title="Drinks" />
      Drinks
      {
        newArrCategory.slice(0, LIMIT_MAX_CATEGORY).map(({ strCategory: cat }) => (
          <button
            key={ cat }
            type="button"
            data-testid={ `${cat}-category-filter` }
            onClick={ () => handleSearchInfo('filterByCategory', cat, 'drinks') }
          >
            {cat}
          </button>
        ))
      }
      { arrCards.slice(0, LIMIT_MAX_CARDS).map(({ strDrinkThumb, strDrink }, i) => {
        console.log('');
        return <Cards key={ i } name={ strDrink } thumb={ strDrinkThumb } index={ i } />;
      })}
    </div>
  );
}
