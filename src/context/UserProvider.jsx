import React from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

export default function UserProvider({ children }) {
  const contextValue = {

  };
  return (
    <UserContext.Provider value={ contextValue }>
      { children }
    </UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;
