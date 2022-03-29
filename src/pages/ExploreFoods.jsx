import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';

export default function ExploreFoods() {
  return (
    <div>
      <Header title="Explore Foods" hasSearch={ false } />
      <Menu />
    </div>
  );
}
