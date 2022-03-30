import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Input from './Input';
import UserContext from '../context/UserContext';

export default function SearchBar() {
  const [radioFilter, setRadioFilter] = useState('');
  const [search, setSearch] = useState('');

  const { handleSearchInfo } = useContext(UserContext);

  const handleChangeSearch = ({ target: { value } }) => setSearch(value);
  const location = useLocation();
  const path = location.pathname.slice(1);

  return (
    <div
      style={ {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-around',
      } }
    >
      <Input
        label="Search Recipe: "
        type="text"
        name="search"
        onChange={ handleChangeSearch }
        value={ search }
        dataTest="search-input"
      />
      <label htmlFor="searchInput">
        <input
          type="radio"
          name="searchInput"
          data-testid="ingredient-search-radio"
          onClick={ () => setRadioFilter('ingredient') }
        />
        Ingredient
      </label>
      <label htmlFor="radio">
        <input
          type="radio"
          name="searchInput"
          data-testid="name-search-radio"
          onClick={ () => setRadioFilter('name') }
        />
        Name
      </label>
      <label htmlFor="radio">
        <input
          type="radio"
          name="searchInput"
          data-testid="first-letter-search-radio"
          onClick={ () => setRadioFilter('letter') }
        />
        First Letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => {
          handleSearchInfo(radioFilter, search, path);
        } }
      >
        Search
      </button>
    </div>
  );
}
