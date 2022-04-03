import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import BootstrapCarousel from '../components/BootstrapCarousel';
import FavButton from '../components/FavButton';
import ShareButton from '../components/ShareButton';
import DrinkContext from '../context/DrinkContext';

export default function FoodsProgress() {
  const history = useHistory();
  const [foodDetail, setFoodDetail] = useState({});
  const [foodIngredients, setFoodIngredients] = useState([]);
  const [foodMeasures, setFoodMeasures] = useState([]);
  const { dataAllDrinks } = useContext(DrinkContext);

  const obj = JSON.parse(localStorage.getItem('inProgressRecipes')) || {
    cocktails: { },
    meals: { },
  };

  const location = useLocation();
  const clickByFinish = () => history.push('/done-recipes');
  const INDEX_LIMIT = 6;
  const foodId = location.pathname.replace(/[^0-9]/g, '');
  const [ingredientList, setIngredientList] = useState(obj.meals[foodId] || []);
  // setIngredientList(obj.meals[foodId]);
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
    // setIngredientList(obj.meals[foodId]);
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
    // setIngredientList(obj.meals[foodId]);
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

  useEffect(() => {
    // setIngredientList(obj.meals[foodId]);
    if (ingredientList.length) {
      const { meals } = obj;
      meals[foodId] = ingredientList;
      localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
    }
  });

  const checkedIngredients = (ingredient) => {
    if (ingredientList.includes(ingredient)) {
      setIngredientList(ingredientList.filter((item) => item !== ingredient));
    } else {
      setIngredientList([...ingredientList, ingredient]);
    }
  };

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
      <div>
        { foodIngredients.map((ingredient, index) => (
          <label
            key={ index }
            data-testid={ `${index}-ingredient-step` }
            htmlFor={ ingredient }
            style={ ingredientList.includes(ingredient) ? { display: 'flex',
              alignItems: 'center',
              textDecoration: 'line-through' } : { display: 'flex',
              alignItems: 'center' } }
          >
            <input
              type="checkbox"
              name={ ingredient }
              checked={ ingredientList.includes(ingredient) }
              id={ ingredient }
              onClick={ () => checkedIngredients(ingredient) }
            />
            {ingredient}
            -
            {foodMeasures[index]}
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

      <button
        type="button"
        onClick={ clickByFinish }
        data-testid="finish-recipe-btn"
        disabled={ ingredientList.length !== foodIngredients.length }
      >
        Finish Recipes

      </button>
    </div>
  );
}
