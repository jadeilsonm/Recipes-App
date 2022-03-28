const endPoints = {
  name: 'www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  letter: 'www.thecocktaildb.com/api/json/v1/1/search.php?f=',
  id: 'www.thecocktaildb.com/api/json/v1/1/lookup.php?i=',
};

const fetchRecipesDrinks = async (type, argument) => {
  const url = `https://${endPoints[type]}${argument}`;
  console.log(url);

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchRecipesDrinks;
