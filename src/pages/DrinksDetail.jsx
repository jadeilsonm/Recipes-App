import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function DrinksDetail() {
  const location = useLocation();
  const magicNumber = 8;
  const drinkId = location.pathname.slice(magicNumber);

  const [drinkDetail, setDrinkDetail] = useState({});
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [drinkMeasures, setDrinkMeasures] = useState([]);
  const [foodRecomendation, setFoodRecomendation] = useState([]);
  const [alreadyDone, setAlreadyDone] = useState([]);
  const [inProgress, setInProgress] = useState([]);

  const handleButton = () => {
    if (inProgress.length !== 0) {
      return (
        <button
          data-testid="start-recipe-btn"
          type="button"
          style={ { position: 'fixed', bottom: '0px' } }
        >
          Continue Recipe
        </button>
      );
    }

    if (alreadyDone.length === 0) {
      return (
        <button
          data-testid="start-recipe-btn"
          type="button"
          style={ { position: 'fixed', bottom: '0px' } }
        >
          Start Recipe
        </button>
      );
    }
    return false;
  };

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const inProgressRecipes = JSON.parse(
      localStorage.getItem('inProgressRecipes'),
    );

    if (doneRecipes !== null) {
      setAlreadyDone(doneRecipes.filter((recipe) => recipe.id === drinkId));
    }

    if (inProgressRecipes !== null) {
      setInProgress(
        Object.keys(inProgressRecipes.cocktails).filter((id) => id === drinkId),
      );
    }
    const fetchDrink = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`,
      );
      const data = await response.json();
      setDrinkDetail(data.drinks[0]);
    };

    fetchDrink();
  }, [drinkId]);

  useEffect(() => {
    const handleIngredient = () => {
      const arrIngredients = Object.entries(drinkDetail)
        .filter(
          (item) => item[0].includes('strIngredient')
            && item[1] !== null
            && item[1] !== '',
        )
        .map((ingredient) => ingredient[1]);
      console.log(arrIngredients);
      setDrinkIngredients(arrIngredients);
    };
    const handleMeasure = () => {
      const arrMeasures = Object.entries(drinkDetail)
        .filter(
          (item) => item[0].includes('strMeasure') && item[1] !== null && item[1] !== '',
        )
        .map((measure) => measure[1]);
      setDrinkMeasures(arrMeasures);
    };
    console.log(Object.entries(drinkDetail));
    handleIngredient();
    handleMeasure();
  }, [drinkDetail]);

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      );
      const data = await response.json();
      const INDEX_LIMIT = 0;
      const INDEX_LIMIT2 = 6;
      setFoodRecomendation(data.meals.splice(INDEX_LIMIT, INDEX_LIMIT2));
    };
    fetchFood();
  }, []);

  return (
    <div style={ { width: '100%' } }>
      <img
        style={ { width: '100%' } }
        data-testid="recipe-photo"
        alt="drink"
        src={ drinkDetail.strDrinkThumb }
      />
      <h1 data-testid="recipe-title">{drinkDetail.strDrink}</h1>
      <img src={ shareIcon } alt="shareIcon" data-testid="share-btn" />
      <img
        src={ whiteHeartIcon }
        alt="whiteHeartIcon"
        data-testid="favorite-btn"
      />
      <p data-testid="recipe-category">{drinkDetail.strAlcoholic}</p>
      <h3>Ingredients</h3>
      <ul>
        {drinkIngredients.map((ingredient, index) => (
          <li
            key={ ingredient }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {ingredient}
            -
            {drinkMeasures[index]}
          </li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p data-testid="instructions">{drinkDetail.strInstructions}</p>
      <h3>Recommended</h3>
      {foodRecomendation.map((food, index) => (
        <div key={ food.strMeal } data-testid={ `${index}-recomendation-card` }>
          <img src={ food.strMealThumb } alt={ food.strMeal } />
          <p>{food.strCategory}</p>
          <h3 data-testid={ `${index}-recomendation-title` }>{food.strMeal}</h3>
        </div>
      ))}
      {handleButton()}
    </div>
  );
}
