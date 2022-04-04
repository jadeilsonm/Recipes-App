import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import Button from './Button';

const Conteiner = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: #0C1015;
  width: 100%;
  height: 50px;
  color: #f2f2f2;
  & button {
    background: transparent;
    border: none;
  }
  & img {
    width: 30px;
    color: #D27842;
  }
  .texto {
    width: 100%;
    position: absolute;
    margin-top: 5px;
    text-align: center;
  }
  .icon {
    /* width: 20%; */
  }

`;
export default function Header({ title, hasSearch }) {
  const [isInput, setIsInput] = useState(false);

  const history = useHistory();
  const reditectTo = () => history.push('/profile');

  const onClick = () => setIsInput(!isInput);

  return (
    <Conteiner>
      <Button
        className="icon"
        onClick={ reditectTo }
        label={ <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profileIcon"
        /> }
      />

      <h1 className="texto" data-testid="page-title">{title}</h1>

      { hasSearch && <Button
        className="icon"
        onClick={ onClick }
        label={ <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="searchIcon"
        /> }
      />}
      {
        isInput && <SearchBar />
      }
    </Conteiner>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  hasSearch: PropTypes.bool,
};

Header.defaultProps = {
  hasSearch: true,
};
