import React from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerExplore } from './style';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Button from '../components/Button';

export default function Explore() {
  const history = useHistory();
  return (
    <ContainerExplore>
      <Header title="Explore" hasSearch={ false } />
      <Menu />
      <Button
        label="Explore Foods"
        dataTest="explore-foods"
        onClick={ () => history.push('/explore/foods') }
      />
      <Button
        label="Explore Drinks"
        dataTest="explore-drinks"
        onClick={ () => history.push('/explore/drinks') }
      />
    </ContainerExplore>
  );
}
