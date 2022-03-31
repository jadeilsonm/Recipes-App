import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';
import DrinkContext from '../context/DrinkContext';
import UserContext from '../context/UserContext';

export default function EDIngredients() {
  const { dataIngredients } = useContext(DrinkContext);
  const urlImage = 'https://www.thecocktaildb.com/images/ingredients/';
  const { handleSearchInfo } = useContext(UserContext);

  return (
    <div>
      <Header title="Explore Ingredients" hasSearch={ false } />
      {dataIngredients.map(({ strIngredient1 }, index) => (
        <Link
          data-testid={ `${index}-ingredient-card` }
          key={ strIngredient1 }
          onClick={
            () => handleSearchInfo('filterByIngredient', strIngredient1, 'drinks')
          }
          to="/explore/drinks"
        >
          <div key={ strIngredient1 }>
            <img
              data-testid={ `${index}-card-img` }
              src={ `${urlImage}${strIngredient1}-Small.png` }
              alt={ `${strIngredient1}` }
            />
            <h4 data-testid={ `${index}-card-name` }>{ strIngredient1 }</h4>
          </div>
        </Link>
      ))}
      <Menu />
    </div>
  );
}
