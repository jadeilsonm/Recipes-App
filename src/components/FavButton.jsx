import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../images/twitter-heart.json';

const Fav = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  margin-right: 10px;
  
  .icon {
    pointer-events: none;
    padding: 0px;
  }

`;
export default function FavButton({ id, recipeDetail }) {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const favoriteIcon = favoriteRecipes.some((recipe) => recipe.id === id);
  const reverse = -1;
  const normal = 1;
  const [isFavorite, setIsFavorite] = useState(false);
  const [animationState, setAnimationState] = useState(
    { isStopped: !favoriteIcon,
      direction: favoriteIcon ? reverse : normal,
      isPaused: false,
    },
  );

  const addFavorite = () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(
      [...favoriteRecipes, recipeDetail],
    ));
    setIsFavorite(!isFavorite);
  };
  const removeFavorite = () => {
    const filter = favoriteRecipes.filter((recipe) => !recipe.id.includes(id));
    localStorage.setItem('favoriteRecipes', JSON.stringify(filter));
    setIsFavorite(!isFavorite);
  };
  const setFavorite = () => (favoriteIcon ? removeFavorite() : addFavorite());
  const animation = () => {
    setAnimationState({ ...animationState,
      isStopped: !animationState.isStopped,
    });
  };
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Fav
      type="button"
      onClick={ () => {
        setFavorite();
        animation();
      } }
    >
      <div className="icon">
        <Lottie
          options={ defaultOptions }
          height={ 210 }
          width={ 210 }
          isStopped={ animationState.isStopped }
          isPaused={ animationState.isPaused }
        />
      </div>
    </Fav>
  );
}
FavButton.propTypes = {
  id: PropTypes.string.isRequired,
  recipeDetail: PropTypes.objectOf(PropTypes.string),
};
FavButton.defaultProps = {
  recipeDetail: {},
};
