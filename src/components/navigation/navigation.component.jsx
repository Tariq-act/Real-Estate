import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.styles.css';

const Navigation = () => {
  return (
    <div>
      <div className='navigation'>
        <div className='logo'>
          {' '}
          <i className='fa-solid fa-house'></i> Estatery
        </div>

        <div className='navigation-links'>
          <Link to='/'>Home</Link>
          <Link to='/favourite'>Favourite</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
