import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title }) {
  const [isInput, setIsInput] = useState(false);
  const history = useHistory();
  const reditectTo = () => {
    history.push('/profile');
  };
  return (
    <div style={ { display: 'flex' } }>
      <button
        type="button"
        onClick={ reditectTo }
      >
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profileIcon"
        />
      </button>
      <h1 data-testid="page-title">{title}</h1>
      <button
        type="button"
      >
        <img data-testid="search-top-btn" src={ searchIcon } alt="searchIcon" />
      </button>

    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
