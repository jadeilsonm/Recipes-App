import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Custon = styled.button`
  background-color: #D62D51;
  width: 90%;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  margin: 15px ;
  :active {
    margin-top: 18px;
  }
`;

export default function Button({ label, onClick, dataTest }) {
  return (
    <Custon type="button" onClick={ onClick } data-testid={ dataTest }>
      { label }
    </Custon>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  dataTest: PropTypes.string,
};
Button.defaultProps = {
  dataTest: '',

};
