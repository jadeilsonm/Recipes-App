import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';

export default function Profile() {
  return (
    <div>
      <Header title="Profile" hasSearch={ false } />
      <Menu />
    </div>
  );
}
