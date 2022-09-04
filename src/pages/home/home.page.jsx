import React, { useContext } from 'react';
import CardList from '../../components/cardList/cardList.component';
import Navigation from '../../components/navigation/navigation.component';
import { Search } from '../../components/Search/search.component';
import Filter from '../../components/filter/filter.component';
import Spinner from '../../components/spinner/spinner.component';

import '../../App.css';

import { GlobalContext } from '../../context/contextApi';

const Home = () => {
  const { result } = useContext(GlobalContext);
  return (
    <>
      <Navigation />
      <div className='container'>
        <Search />
        <Filter />
        {result ? <CardList /> : <Spinner />}
      </div>
    </>
  );
};

export default Home;
