import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Conteiner, ConteinerCards } from './style';
import Header from '../components/Header';
import Menu from '../components/Menu';
import FoodContext from '../context/FoodContext';
import UserContext from '../context/UserContext';
import Cards from '../components/Cards';

const Select = styled.select`
  width: 91%;
  /* text-align: center; */
  margin: 15px;
  padding: 10px 25px;
  border: none;
  border-radius: 10px;
  background-color: #141921;
  color: #f8f8f8;
  font-size: 18px;
`;

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
    <Conteiner>
      <Header title="Explore Nationalities" />
      {/* <Global> */}
      <Select
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
      </Select>
      {/* </Global> */}
      <ConteinerCards>
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
      </ConteinerCards>
      <Menu />
    </Conteiner>
  );
}
