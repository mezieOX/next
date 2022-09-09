import React from 'react';
import Cards from '../components/cards/Cards';
import Desc from '../components/desc/Desc';
import Header from '../components/header/Header';
import Join from '../components/join/Join';

function Home() {
  return (
    <div>
      <div className='sticky top-0 z-40 bg-white sm:h-40 mb-2 shadow-md'>
        <Header />
      </div>
      <Join />
      <Desc />
      <div className=''>
        <Cards />
        </div>
    </div>
  );
}

export default Home;
