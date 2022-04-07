import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Button, TitleDetail, ImgDetail, ContainerDetails } from './style';
import BootstrapCarousel from '../components/BootstrapCarousel';
import FavButton from '../components/FavButton';
import ShareButton from '../components/ShareButton';
import FoodContext from '../context/FoodContext';

export default function DrinksProgress() {
  const history = useHistory();
  const [drinkDetail, setDrinkDetail] = useState({});
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [drinkMeasures, setDrinkMeasures] = useState([]);
  const { dataAllFoods } = useContext(FoodContext);

  const obj = JSON.parse(localStorage.getItem('inProgressRecipes')) || {
    cocktails: { },
    meals: { },
  };

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed).toLocaleDateString();

  const location = useLocation();
  const INDEX_LIMIT = 6;
  const drinkId = location.pathname.replace(/[^0-9]/g, '');
  const thisRecipe = {
    id: drinkId,
    type: 'drink',
    nationality: '',
    category: drinkDetail.strCategory,
    alcoholicOrNot: drinkDetail.strAlcoholic,
    name: drinkDetail.strDrink,
    image: drinkDetail.strDrinkThumb,
    doneDate: today,
  };
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const clickByFinish = () => {
    localStorage.setItem('doneRecipes', JSON.stringify(
      [...doneRecipes, thisRecipe],
    ));
    history.push('/done-recipes');
  };
  const [ingredientList, setIngredientList] = useState(obj.cocktails[drinkId] || []);

  useEffect(() => {
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

  const checkedIngredients = (ingredient) => {
    if (ingredientList.includes(ingredient)) {
      setIngredientList(ingredientList.filter((item) => item !== ingredient));
    } else {
      setIngredientList([...ingredientList, ingredient]);
    }
  };

  useEffect(() => {
    if (ingredientList.length) {
      const { cocktails } = obj;
      cocktails[drinkId] = ingredientList;
      localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
    }
  });

  return (
    <>
      <ImgDetail>
        <TitleDetail>
          <div className="texts">
            <h1 data-testid="recipe-title">{drinkDetail.strDrink}</h1>
            <p data-testid="recipe-category">{drinkDetail.strAlcoholic}</p>
          </div>
          <div className="buttons">
            <FavButton
              id={ drinkId }
              recipeDetail={ thisRecipe }
              dataTest="favorite-btn"
            />
            <ShareButton type="drink" id={ drinkId } dataTest="share-btn" />
          </div>
        </TitleDetail>
        <img
          data-testid="recipe-photo"
          alt="food"
          src={ drinkDetail.strDrinkThumb }
        />
      </ImgDetail>
      <ContainerDetails>
        <h3>Ingredients</h3>
        <div>
          {drinkIngredients.map((ingredient, index) => (
            <label
              htmlFor={ ingredient }
              key={ ingredient }
              style={ ingredientList.includes(ingredient) ? { display: 'flex',
                alignItems: 'center',
                textDecoration: 'line-through' } : { display: 'flex',
                alignItems: 'center' } }
              data-testid={ `${index}-ingredient-step` }
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
              {drinkMeasures[index]}
            </label>
          ))}
        </div>
        <h3>Instructions</h3>
        <p
          className="paragraph"
          data-testid="instructions"
        >
          {drinkDetail.strInstructions}
        </p>
        <Button
          type="button"
          onClick={ clickByFinish }
          data-testid="finish-recipe-btn"
          disabled={ ingredientList.length !== drinkIngredients.length }
        >
          Finish Recipe
        </Button>
        <h3>Recommended</h3>
        <BootstrapCarousel
          type="Meal"
          items={ dataAllFoods.slice(0, INDEX_LIMIT) }
        />

      </ContainerDetails>
    </>
  );
}
