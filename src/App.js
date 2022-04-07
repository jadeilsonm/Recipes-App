import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import FoodsDetail from './pages/FoodsDetail';
import DrinksDetail from './pages/DrinksDetail';
import FoodsProgress from './pages/FoodsProgress';
import DrinksProgress from './pages/DrinksProgress';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import EFIngredients from './pages/EFIngredients';
import EDIngredients from './pages/EDIngredients';
import ENFoods from './pages/ENFoods';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import Favorites from './pages/Favorites';
import NotFound from './components/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/login" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/foods/:id" component={ FoodsDetail } />
      <Route exact path="/drinks/:id" component={ DrinksDetail } />
      <Route path="/foods/:id/in-progress" component={ FoodsProgress } />
      <Route path="/drinks/:id/in-progress" component={ DrinksProgress } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route path="/explore/foods/ingredients" component={ EFIngredients } />
      <Route path="/explore/drinks/ingredients" component={ EDIngredients } />
      <Route path="/explore/foods/nationalities" component={ ENFoods } />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ Favorites } />
      <Route path="/explore/drinks/nationalities" component={ NotFound } />
    </Switch>
  );
}

export default App;
