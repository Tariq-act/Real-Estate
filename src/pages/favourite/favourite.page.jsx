import React, { useContext } from 'react';
import Card from '../../components/card/card.component';
import Navigation from '../../components/navigation/navigation.component';
import { GlobalContext } from '../../context/contextApi';

import '../../components/cardList/cardList.styles.css';

const Favourite = () => {
  const { favorite } = useContext(GlobalContext);
  return (
    <>
      <Navigation />
      <div className='container'>
        <div className='card-list'>
          {favorite.map((item) => (
            <Card data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favourite;
