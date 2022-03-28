const endPoints = {
  name: 'www.themealdb.com/api/json/v1/1/search.php?s=',
  letter: 'www.themealdb.com/api/json/v1/1/search.php?f=',
  id: 'www.themealdb.com/api/json/v1/1/lookup.php?i=',
};

const fetchRecipesFoods = async (type, argument) => {
  const url = `https://${endPoints[type]}${argument}`;
  console.log(url);

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchRecipesFoods;
