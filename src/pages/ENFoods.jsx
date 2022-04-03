import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';
import FoodContext from '../context/FoodContext';
import UserContext from '../context/UserContext';
import Cards from '../components/Cards';

export default function ENFoods() {
  const { dataAreas, filteredData, dataAllFoods } = useContext(FoodContext);
  const { handleSearchInfo } = useContext(UserContext);
  const [dataFoods, setDataFoods] = useState();
  const magicNumber = 12;
  const history = useHistory();

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
        onChange={ ({ target: { value } }) => {
          if (value === 'All') {
            setDataFoods(dataAllFoods);
          } else {
            handleSearchInfo('filteredByArea', value, 'foods');
          }
        } }
        name="area"
      >
        {dataAreas.length && dataAreas.map(({ strArea }) => (
          <option
            data-testid={ `${strArea}-option` }
            key={ strArea }
            value={ strArea }
          >
            { strArea }
          </option>
        ))}
      </select>

      <div>
        {dataFoods && dataFoods.slice(0, magicNumber).map((food, index) => {
          const clickCard = ({ target: { value } }) => {
            if (!value) {
              history.push(`/foods/${food.idMeal}`);
            }
          };
          return (
            <Cards
              key={ food.strMeal }
              name={ food.strMeal }
              thumb={ food.strMealThumb }
              index={ index }
              clickCard={ clickCard }
            />);
        })}
      </div>
      <Menu />
    </div>
  );
}
