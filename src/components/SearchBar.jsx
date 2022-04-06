import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from './Input';
import UserContext from '../context/UserContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  & button {
  background-color: #D27842;
  width: 70%;
  font-size: 18px;
  font-weight: 500;
  color: #f2f2f2;
  border: none;
  border-radius: 20px;
  padding: 5px;
  margin: 0 auto ;
  }
`;
const Radios = styled.div`
  margin: 30px 0;
  display: flex;
  font-size: 20px;
  font-weight: 700;

  #ingredient, #name, #letter {
    display: none;
  }
  & label {
    display: flex;
    color: #4F5054;
    align-items: center;
    letter-spacing: 0.4px;
    padding: 10px;
    cursor: pointer;
  }

  /* & label::before { */
    /* content: ''; */
    /* color: #D27842; */
    /* display: block; */
    /* height: 3rem;
    width: 3rem; */
    /* box-sizing: border-box; */
    /* border-radius: 50%; */
    /* margin-right: 10px; */
    /* background-color: red; */
    /* transition: 0.3s ease-in-out; */
  /* } */
  /* #ingredient:checked{
    color: #D27842;
    background-color: #D27842;
  } */
  label:hover, label:active {
    color: #D27842;
  }
`;

export default function SearchBar({ click }) {
  const [radioFilter, setRadioFilter] = useState('');
  const [search, setSearch] = useState('');

  const { handleSearchInfo } = useContext(UserContext);

  const handleChangeSearch = ({ target: { value } }) => setSearch(value);
  const location = useLocation();
  const path = location.pathname.slice(1);

  return (
    <Container>
      <Input
        label="Search Recipe..."
        type="text"
        name="search"
        onChange={ handleChangeSearch }
        value={ search }
        dataTest="search-input"
      />
      <Radios>

        <label htmlFor="ingredient">
          Ingredient
          <input
            type="radio"
            id="ingredient"
            name="searchInput"
            data-testid="ingredient-search-radio"
            onClick={ () => setRadioFilter('ingredient') }
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="radio"
            id="name"
            name="searchInput"
            data-testid="name-search-radio"
            onClick={ () => setRadioFilter('name') }
          />
        </label>
        <label htmlFor="letter">
          First Letter
          <input
            type="radio"
            id="letter"
            name="searchInput"
            data-testid="first-letter-search-radio"
            onClick={ () => setRadioFilter('letter') }
          />
        </label>
      </Radios>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => {
          handleSearchInfo(radioFilter, search, path);
          click();
        } }
      >
        Search
      </button>
    </Container>
  );
}
SearchBar.propTypes = {
  click: PropTypes.func.isRequired,
};
