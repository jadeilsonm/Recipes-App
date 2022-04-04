import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Conteiner = styled.div`
  width: 100%;
  /* height: 50px; */
  display: flex;
  justify-content: space-evenly;
  background-color: #0C1015;
  position: fixed;
  bottom: 0;

  & button {
    background-color: transparent ;
    border-radius: 10px;
    border: none;
    padding: 5px;
    margin: 3px;
  }
  & img {
    color: white;
    margin: 10px solid white;
  }
  `;

export default function Menu() {
  const history = useHistory();
  const reditectTo = (rota) => history.push(rota);
  return (
    <Conteiner data-testid="footer">
      <button
        type="button"
        onClick={ () => reditectTo('/drinks') }
      >
        <img src={ drinkIcon } alt="drinkIcon" data-testid="drinks-bottom-btn" />
      </button>

      <button
        type="button"
        onClick={ () => reditectTo('/explore') }
      >
        <img src={ exploreIcon } alt="exploreIcon" data-testid="explore-bottom-btn" />
      </button>

      <button
        type="button"
        onClick={ () => reditectTo('/foods') }
      >
        <img src={ mealIcon } alt="mealIcon" data-testid="food-bottom-btn" />
      </button>

    </Conteiner>
  );
}
