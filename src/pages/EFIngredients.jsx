import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';
import FoodContext from '../context/FoodContext';
import UserContext from '../context/UserContext';

export default function EFIngredients() {
  const { dataIngredients } = useContext(FoodContext);
  const { handleSearchInfo } = useContext(UserContext);
  const urlImage = 'https://www.themealdb.com/images/ingredients/';

  return (
    <div>
      <Header title="Explore Ingredients" hasSearch={ false } />
      {dataIngredients.map(({ strIngredient }, index) => (
        <Link
          data-testid={ `${index}-ingredient-card` }
          key={ strIngredient }
          onClick={
            () => handleSearchInfo('filterByIngredient', strIngredient, 'foods')
          }
          to="/explore/foods"
        >
          <div>
            <img
              data-testid={ `${index}-card-img` }
              src={ `${urlImage}${strIngredient}-Small.png` }
              alt={ `${strIngredient}` }
            />
            <h4 data-testid={ `${index}-card-name` }>{ strIngredient }</h4>
          </div>
        </Link>
      ))}
      <Menu />
    </div>
  );
}
