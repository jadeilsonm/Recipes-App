import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import Button from './Button';

export default function Header({ title, hasSearch }) {
  const [isInput, setIsInput] = useState(false);

  const history = useHistory();
  const reditectTo = () => history.push('/profile');

  const onClick = () => setIsInput(!isInput);

  return (
    <div>
      <div
        style={ { display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
        } }
      >
        <Button
          onClick={ reditectTo }
          label={ <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="profileIcon"
          /> }
        />

        <h1 data-testid="page-title">{title}</h1>

        { hasSearch && <Button
          onClick={ onClick }
          label={ <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="searchIcon"
          /> }
        />}
      </div>
      <div>
        {
          isInput && <SearchBar />
        }
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  hasSearch: PropTypes.bool,
};

Header.defaultProps = {
  hasSearch: true,
};
