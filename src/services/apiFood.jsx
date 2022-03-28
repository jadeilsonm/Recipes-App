const endPoints = {
  search: 'www.themealdb.com/api/json/v1/1/search.php?s=',
  letter: 'www.themealdb.com/api/json/v1/1/search.php?f=',
  ingredients: 'www.themealdb.com/api/json/v1/1/list.php?i=',
};

const fetchRecipesFoods = async (type, argument) => {
  const url = `https://${endPoints[type]}${argument}`;
  console.log(url);

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchRecipesFoods;
