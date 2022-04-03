import React, { useContext } from 'react';
import IngredientCard from '../components/IngredientCard';
import Header from '../components/Header';
import Menu from '../components/Menu';
import FoodContext from '../context/FoodContext';

export default function EFIngredients() {
  const { dataIngredients } = useContext(FoodContext);
  const urlImage = 'https://www.themealdb.com/images/ingredients/';

  return (
    <div>
      <Header title="Explore Ingredients" hasSearch={ false } />
      {dataIngredients.map(({ strIngredient }, index) => (
        <IngredientCard
          key={ strIngredient }
          name={ strIngredient }
          thumb={ `${urlImage}${strIngredient}-Small.png` }
          index={ index }
          type="foods"
        />
      ))}
      <Menu />
    </div>
  );
}
