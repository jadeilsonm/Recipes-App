const endPoints = {
  name: 'www.themealdb.com/api/json/v1/1/search.php?s=',
  letter: 'www.themealdb.com/api/json/v1/1/search.php?f=',
  id: 'www.themealdb.com/api/json/v1/1/lookup.php?i=',
  ingredient: 'www.themealdb.com/api/json/v1/1/filter.php?i=',
};

const fetchRecipesFoods = async (type, argument) => {
  const url = `https://${endPoints[type]}${argument}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
};

export default fetchRecipesFoods;
