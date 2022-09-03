import React from 'react';
import './search.style.css';

export const Search = () => {
  return (
    <div className='search'>
      <div className='search-text'>Search Properties to rent</div>
      <div className='search-input'>
        <input type='search' placeholder='Search with Search Bar' />
      </div>
    </div>
  );
};
