import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Menu from '../components/Menu';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

  console.log(user);

  return (
    <div>
      <Header title="Profile" hasSearch={ false } />
      { user && <p data-testid="profile-email">{user.email}</p> }
      <Button
        label="Done Recipes"
        dataTest="profile-done-btn"
        onClick={ () => history.push('/done-recipes') }
      />
      <Button
        label="Favorite Recipes"
        dataTest="profile-favorite-btn"
        onClick={ () => history.push('/favorite-recipes') }
      />
      <Button
        label="Logout"
        dataTest="profile-logout-btn"
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
      />
      <Menu />
    </div>
  );
}
