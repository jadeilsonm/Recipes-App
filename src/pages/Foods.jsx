import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import fetchRecipesFoods from '../services/apiFood';

const LIMIT_MAX_CARDS = 12;
const LIMIT_MAX_CATEGORY = 5;

export default function Foods() {
  const [getResponseProduct, setResponseProduct] = useState([]);
  const [getCategory, setCategory] = useState([]);

  async function getData() {
    const data = await fetchRecipesFoods('name', '');
    const dataCategory = await fetchRecipesFoods('category', '');
    setCategory(dataCategory.meals.slice(0, LIMIT_MAX_CATEGORY));
    // setCategory(await fetchRecipesFoods('category', ''));
    setResponseProduct(data.meals.slice(0, LIMIT_MAX_CARDS));
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      Foods
      {
        getCategory.map(({ strCategory: cat }) => (
          <button key={ cat } type="button" data-testid={ `${cat}-category-filter` }>
            {cat}
          </button>
        ))
      }
      { getResponseProduct.map(({ strMealThumb, strMeal }, i) => {
        console.log('');
        return <Cards key={ i } name={ strMeal } thumb={ strMealThumb } index={ i } />;
      })}
    </div>
  );
}
