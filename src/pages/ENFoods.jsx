import React, { useContext, useState, useEffect } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import FoodContext from '../context/FoodContext';
import UserContext from '../context/UserContext';

export default function ENFoods() {
  const { dataAreas, filteredData, dataAllFoods } = useContext(FoodContext);
  const { handleSearchInfo } = useContext(UserContext);
  const [dataFoods, setDataFoods] = useState();
  const magicNumber = 12;

  useEffect(() => {
    if (filteredData.length !== 0) {
      setDataFoods(filteredData);
    } else setDataFoods(dataAllFoods);
  }, [dataAllFoods, filteredData]);

  return (
    <div>
      <Header title="Explore Nationalities" />
      <select
        data-testid="explore-by-nationality-dropdown"
        onChange={
          ({ target: { value } }) => handleSearchInfo('filteredByArea', value, 'foods')
        }
        name="area"
      >
        {dataAreas.map(({ strArea }) => (
          <option
            data-testid={ `${strArea}-option` }
            key={ strArea }
            value={ strArea }
          >
            { strArea }
          </option>
        ))}
      </select>
      {dataFoods && dataFoods.slice(0, magicNumber).map((food, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ food.strMeal }>
          <img
            data-testid={ `${index}-card-img` }
            src={ food.strMealThumb }
            alt={ food.strMeal }
          />
          <h4 data-testid={ `${index}-card-name` }>{ food.strMeal }</h4>
        </div>
      ))}
      <Menu />
    </div>
  );
}
