import React, { useContext } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import DrinkContext from '../context/DrinkContext';
import IngredientCard from '../components/IngredientCard';

export default function EDIngredients() {
  const { dataIngredients } = useContext(DrinkContext);
  const urlImage = 'https://www.thecocktaildb.com/images/ingredients/';

  return (
    <div>
      <Header title="Explore Ingredients" hasSearch={ false } />
      {dataIngredients.map(({ strIngredient1 }, index) => (
        <IngredientCard
          key={ strIngredient1 }
          name={ strIngredient1 }
          thumb={ `${urlImage}${strIngredient1}-Small.png` }
          index={ index }
          type="drinks"
        />
      ))}
      <Menu />
    </div>
  );
}
