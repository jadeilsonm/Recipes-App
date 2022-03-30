import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import UserContext from '../context/UserContext';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Button from '../components/Button';

export default function ExploreFoods() {
  const { handleSearchInfo } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const magicNumber = 9;
  const path = location.pathname.slice(magicNumber);
  return (
    <div>
      <Header title="Explore Foods" hasSearch={ false } />
      <Menu />
      <Button
        label="By Ingredient"
        dataTest="explore-by-ingredient"
        onClick={ () => history.push('/explore/foods/ingredients') }
      />
      <Button
        label="By Nationality"
        dataTest="explore-by-nationality"
        onClick={ () => history.push('/explore/foods/nationalities') }
      />
      <Button
        label="Surprise me!"
        dataTest="explore-surprise"
        onClick={ () => {
          handleSearchInfo('random', '', path);
        } }
      />
    </div>
  );
}
