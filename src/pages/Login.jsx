import React from 'react';
import fetchRecipesDrinks from '../services/apiDrink';
import fetchRecipesFoods from '../services/apiFood';

export default function Login() {
  console.log(fetchRecipesFoods('letter', 'a'));
  console.log(fetchRecipesDrinks('letter', 'a'));
  return (
    <div>Login</div>
  );
}
