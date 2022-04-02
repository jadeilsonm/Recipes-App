import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Button from '../components/Button';
import BootstrapCarousel from '../components/BootstrapCarousel';

export default function DrinksDetail() {
  const location = useLocation();
  const history = useHistory();
  const magicNumber = 8;
  const drinkId = location.pathname.slice(magicNumber);
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

  const [drinkDetail, setDrinkDetail] = useState({});
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [drinkMeasures, setDrinkMeasures] = useState([]);
  const [foodRecomendation, setFoodRecomendation] = useState([]);
  const [alreadyDone, setAlreadyDone] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [click, setClick] = useState(false);
  const [remove, setRemove] = useState(false);

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
          onClick={ () => history.push(`/drinks/${drinkId}/in-progress`) }
        >
          Start Recipe
        </button>
      );
    }
    return false;
  };

  const addFavorite = () => {
    const recipe = {
      id: drinkId,
      type: 'drink',
      nationality: '',
      category: drinkDetail.strCategory,
      alcoholicOrNot: drinkDetail.strAlcoholic,
      name: drinkDetail.strDrink,
      image: drinkDetail.strDrinkThumb,
    };
    localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteRecipes, recipe]));
    setRemove(!remove);
  };
  const removeFavorite = () => {
    const tests = favoriteRecipes.filter((recipe) => !recipe.id.includes(drinkId));
    localStorage.setItem('favoriteRecipes', JSON.stringify(tests));
    setRemove(!remove);
  };

  const handleFavorite = () => {
    const favoriteIcon = favoriteRecipes.some((recipe) => recipe.id === drinkId);
    return (<Button
      onClick={
        favoriteIcon ? removeFavorite : addFavorite
      }
      label={
        <img
          src={ favoriteIcon ? blackHeartIcon : whiteHeartIcon }
          alt="favorite button"
          data-testid="favorite-btn"
        />
      }
    />);
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
      setFoodRecomendation(data.meals.slice(INDEX_LIMIT, INDEX_LIMIT2));
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
      {click && <alert>Link copied!</alert>}
      <Button
        onClick={ () => {
          clipboardCopy(`http://localhost:3000/drinks/${drinkId}`);
          setClick(!click);
        } }
        label={
          <img
            src={ shareIcon }
            alt="share button"
            data-testid="share-btn"
          />
        }
      />
      {handleFavorite()}
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
      { foodRecomendation.length
        && <BootstrapCarousel
          type="Meal"
          items={ foodRecomendation }
        /> }
      {handleButton()}
    </div>
  );
}
