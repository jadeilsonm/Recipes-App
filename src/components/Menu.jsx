import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Conteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: rgba(12,15,20,0.95);
  position: fixed;
  bottom: 0;
  
  & button {
    background-color: transparent ;
    border: none;
    padding: 5px;
    margin: 3px;
    color: #AABAC1;
    font-size: 24px;
  }
  & button:hover, button:active  {
    color: #D27842;
    }
  `;

export default function Menu() {
  const history = useHistory();
  const reditectTo = (rota) => history.push(rota);
  return (
    <Conteiner data-testid="footer">
      <button
        type="button"
        onClick={ () => reditectTo('/foods') }
      >
        <i className="fi fi-sr-utensils" />
      </button>
      <button
        type="button"
        onClick={ () => reditectTo('/explore') }
      >
        <i className="fi fi-sr-apps" />
      </button>
      <button
        type="button"
        onClick={ () => reditectTo('/drinks') }
      >
        <i className="fi fi-sr-glass-cheers" />
        {/* <i className="fi fi-sr-cocktail-alt" /> */}
      </button>

    </Conteiner>
  );
}
