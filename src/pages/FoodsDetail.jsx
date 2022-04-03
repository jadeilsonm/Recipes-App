import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import FavButton from '../components/FavButton';
import BootstrapCarousel from '../components/BootstrapCarousel';
import ShareButton from '../components/ShareButton';
import StartRecipe from '../components/StartRecipe';
import DrinkContext from '../context/DrinkContext';

export default function FoodsDetail() {
  const [foodDetail, setFoodDetail] = useState({});
  const [foodIngredients, setFoodIngredients] = useState([]);
  const [foodMeasures, setFoodMeasures] = useState([]);
  const { dataAllDrinks } = useContext(DrinkContext);

  const location = useLocation();
  const INDEX_LIMIT = 6;
  const isInProgress = location.pathname.includes('in-progress');
  const foodId = location.pathname.replace(/[^0-9]/g, '');
  const thisRecipe = {
    id: foodId,
    type: 'food',
    nationality: foodDetail.strArea,
    category: foodDetail.strCategory,
    alcoholicOrNot: '',
    name: foodDetail.strMeal,
    image: foodDetail.strMealThumb,
  };

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`,
      );
      const data = await response.json();
      setFoodDetail(data.meals[0]);
    };

    fetchFood();
  }, [foodId]);

  useEffect(() => {
    const handleIngredient = () => {
      const arrIngredients = Object.entries(foodDetail)
        .filter(
          (item) => item[0].includes('strIngredient')
            && item[1] !== ''
            && item[1] !== null,
        )
        .map((ingredient) => ingredient[1]);
      setFoodIngredients(arrIngredients);
    };
    const handleMeasure = () => {
      const arrMeasures = Object.entries(foodDetail)
        .filter(
          (item) => item[0].includes('strMeasure')
            && item[1] !== ''
            && item[1] !== null,
        )
        .map((measure) => measure[1]);
      setFoodMeasures(arrMeasures);
    };
    handleIngredient();
    handleMeasure();
  }, [foodDetail]);

  return (
    <div style={ { width: '100%' } }>
      <img
        style={ { width: '100%' } }
        data-testid="recipe-photo"
        alt="food"
        src={ foodDetail.strMealThumb }
      />
      <h1 data-testid="recipe-title">{foodDetail.strMeal}</h1>
      <ShareButton type="food" id={ foodId } dataTest="share-btn" />
      <FavButton
        id={ foodId }
        recipeDetail={ thisRecipe }
        dataTest="favorite-btn"
      />
      <p data-testid="recipe-category">{foodDetail.strCategory}</p>
      <h3>Ingredients</h3>
      <ul>
        {foodIngredients.map((ingredient, index) => (
          <li
            key={ ingredient }
            data-testid={ isInProgress
              ? `${index}-ingredient-step`
              : `${index}-ingredient-name-and-measure` }
          >
            {ingredient}
            -
            {foodMeasures[index]}
          </li>
        ))}
      </ul>
      <div>
        { foodIngredients.map((ingredient, index) => (
          <label key={ index } htmlFor={ ingredient } style={ { display: 'flex' } }>
            {ingredient}
            -
            {foodMeasures[index]}
            <input
              type="checkbox"
              name={ ingredient }
              id={ ingredient }
              data-testid={ `${index}-ingredient-name-and-measure` }
            />
          </label>
        ))}

      </div>

      <h3>Instructions</h3>
      <p data-testid="instructions">{foodDetail.strInstructions}</p>
      <h3>Video</h3>
      <iframe
        data-testid="video"
        title={ foodDetail.strMeal }
        src={ foodDetail.strYoutube }
      />
      <h3>Recommended</h3>
      <BootstrapCarousel
        type="Drink"
        items={ dataAllDrinks.slice(0, INDEX_LIMIT) }
      />
      <StartRecipe id={ foodId } type="food" />

    </div>
  );
}
