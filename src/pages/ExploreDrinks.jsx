import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Button from '../components/Button';

export default function ExploreDrinks() {
  const history = useHistory();
  return (
    <div>
      <Header title="Explore Drinks" hasSearch={ false } />
      <Menu />
      <Button
        label="By Ingredient"
        dataTest="explore-by-ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
      />
      <Button
        label="Surprise me!"
        dataTest="explore-surprise"
        // onClick={ } // falta implementar a funcionalidade
      />
    </div>
  );
}
