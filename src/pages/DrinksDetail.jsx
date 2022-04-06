import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Conteiner, ImgDetail, ContainerDetails } from './style';
import FavButton from '../components/FavButton';
import BootstrapCarousel from '../components/BootstrapCarousel';
import ShareButton from '../components/ShareButton';
import StartRecipe from '../components/StartRecipe';
import FoodContext from '../context/FoodContext';

export default function DrinksDetail() {
  const [drinkDetail, setDrinkDetail] = useState({});
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [drinkMeasures, setDrinkMeasures] = useState([]);
  const { dataAllFoods } = useContext(FoodContext);

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
  };

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

  return (
    <Conteiner>
      <ContainerDetails>
        <ImgDetail
          style={ { width: '100%' } }
          data-testid="recipe-photo"
          alt="drink"
          src={ drinkDetail.strDrinkThumb }
        />
        <h1 data-testid="recipe-title">{drinkDetail.strDrink}</h1>
        <p data-testid="recipe-category">{drinkDetail.strAlcoholic}</p>
        <ShareButton type="drink" id={ drinkId } dataTest="share-btn" />
        <FavButton id={ drinkId } recipeDetail={ thisRecipe } dataTest="favorite-btn" />
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
        <p
          className="paragraph"
          data-testid="instructions"
        >
          {drinkDetail.strInstructions}
        </p>
        <StartRecipe id={ drinkId } type="drink" />
        <h3>Recommended</h3>
        <BootstrapCarousel
          type="Meal"
          items={ dataAllFoods.slice(0, INDEX_LIMIT) }
        />
      </ContainerDetails>
    </Conteiner>
  );
}
