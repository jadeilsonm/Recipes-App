import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';

export default function EFIngredients() {
  return (
    <div>
      <Header title="Explore Ingredients" hasSearch={ false } />
      <Menu />
    </div>
  );
}
