import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';

export default function Explore() {
  return (
    <div>
      <Header title="Explore" hasSearch={ false } />
      <Menu />
    </div>
  );
}
