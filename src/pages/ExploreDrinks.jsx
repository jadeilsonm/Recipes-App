import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';

export default function ExploreDrinks() {
  return (
    <div>
      <Header title="Explore Drinks" hasSearch={ false } />
      <Menu />
    </div>
  );
}
