import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Menu() {
  const history = useHistory();
  const reditectTo = (rota) => history.push(rota);
  return (
    <div
      data-testid="footer"
      style={ { display: 'flex',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        justifyContent: 'space-evenly',
      } }
    >
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

    </div>
  );
}
