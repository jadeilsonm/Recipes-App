import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Cards from '../components/Cards';
import Header from '../components/Header';
import DrinkContext from '../context/DrinkContext';
import UserContext from '../context/UserContext';

const LIMIT_MAX_CARDS = 12;
const LIMIT_MAX_CATEGORY = 5;

import Menu from '../components/Menu';


export default function Drinks() {
  const { dataAllDrinks, dataCategory, data } = useContext(DrinkContext);
  const [arrCards, setArrCard] = useState([]);
  const [isFilterAll, setIsFilterAll] = useState(false);
  const { handleSearchInfo } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    console.log(dataAllDrinks);
    if (data.length !== 0) setArrCard(data);
    else setArrCard(dataAllDrinks);
    if (isFilterAll) setArrCard(dataAllDrinks);
  }, [dataAllDrinks, data, isFilterAll]);

  const newArrCategory = [...new Set(dataCategory)];

  return (
    <div>
      <Header title="Drinks" />
      <Menu />
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
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => setIsFilterAll(true) }
      >
        All
      </button>
      { arrCards.slice(0, LIMIT_MAX_CARDS)
        .map(({ strDrinkThumb, strDrink, idDrink }, i) => {
          const clickCard = () => history.push(`/drinks/${idDrink}`);
          return (<Cards
            key={ i }
            id={ idDrink }
            name={ strDrink }
            thumb={ strDrinkThumb }
            clickCard={ clickCard }
            index={ i }
          />);
        })}
    </div>
  );
}
