import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

const Conteiner = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  width: 90%;
  border-radius: 25px;
  background: linear-gradient(145deg, rgba(38,43,52,1) 0%, rgba(12,15,20,1) 100%);
  color: #f2f2f2;
  margin: 9px;
  
  & h3 {
    font-size: 18px;
    font-weight: 600;
    background: transparent;
  }

  & img {
    width: 30%;
    background: transparent;
    padding: 10px;
    margin-right: 25px;
    margin-left: 10px;
  } 
`;

export default function IngredientCard(props) {
  const { name, thumb, index, clickCard, type } = props;
  const { handleSearchInfo } = useContext(UserContext);

  return (
    <Link
      style={ { textDecoration: 'none' } }
      data-testid={ `${index}-ingredient-card` }
      key={ name }
      onClick={
        () => handleSearchInfo('filterByIngredient', name, type)
      }
      to={ `/explore/${type}` }
    >
      <Conteiner
        onClick={ clickCard }
        role="button"
        tabIndex={ 0 }
        aria-hidden="true"
      >
        <img
          data-testid={ `${index}-card-img` }
          src={ thumb }
          alt="Thumb"
        />
        <h3 data-testid={ `${index}-card-name` }>{ name }</h3>
      </Conteiner>
    </Link>
  );
}

IngredientCard.propTypes = {
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  clickCard: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
