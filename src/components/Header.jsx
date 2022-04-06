import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

const Conteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #0C1015;
  width: 100%;
  padding: 10px;
  color: #f2f2f2;
  padding-top: 10px;
  position: fixed;
  top: 0;

  & .icon {
    background-color: transparent ;
    border-radius: 10px;
    border: none;
    padding: 5px;
    margin: 3px;
    color: #4F5054;
    font-size: 24px;
  }
  & .icon:hover, .icon:active  {
    color: #D27842;
    }
  .texto {
    width: 97%;
    background: transparent;
    pointer-events: none;
    position: absolute;
    margin-top: 5px;
    text-align: center;
  }
`;
export default function Header({ title, hasSearch }) {
  const [isInput, setIsInput] = useState(false);

  const history = useHistory();
  const reditectTo = () => history.push('/profile');

  const onClick = () => setIsInput(!isInput);

  return (
    <Conteiner>
      <button
        className="icon"
        type="button"
        onClick={ reditectTo }
      >
        <i className="fi fi-ss-user" />
      </button>

      <h1 className="texto" data-testid="page-title">{title}</h1>

      { hasSearch && (
        <button
          className="icon"
          type="button"
          onClick={ onClick }
        >
          <i className="fi fi-br-search" />
        </button>
      )}
      {
        isInput && <SearchBar click={ onClick } />
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
