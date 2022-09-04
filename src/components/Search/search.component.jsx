import React from 'react';
import { useContext } from 'react';

import './search.styles.css';
import { GlobalContext } from '../../context/contextApi';

export const Search = () => {
  const { inputSearch, handleSearchInput } = useContext(GlobalContext);
  console.log(inputSearch);
  return (
    <div className='search'>
      <div className='search-text'>Search Properties to rent</div>
      <div className='search-input'>
        <input
          type='search'
          value={inputSearch}
          onChange={handleSearchInput}
          placeholder='Search with Search Bar'
        />
      </div>
    </div>
  );
};
