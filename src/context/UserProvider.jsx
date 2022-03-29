import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

export default function UserProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [searchInfo, setSearchInfo] = useState({ type: '', searchValue: '' });

  const handleChangeEmail = ({ target: { value } }) => setEmail(value);
  const handleChangePassword = ({ target: { value } }) => setPassword(value);
  const handleSearchInfo = (type, searchValue) => setSearchInfo({ type, searchValue });
  const contextValue = {
    email,
    handleChangeEmail,
    password,
    handleChangePassword,
    searchInfo,
    handleSearchInfo,

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
