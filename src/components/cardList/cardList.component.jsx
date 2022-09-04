import React, { useContext } from 'react';

import Card from '../card/card.component';

import './cardList.styles.css';

import { GlobalContext } from '../../context/contextApi';

const CardList = () => {
  const { list } = useContext(GlobalContext);
  return (
    <div className='cardList'>
      {list.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CardList;
