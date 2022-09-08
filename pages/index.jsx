import React from 'react';
import Desc from '../components/desc/Desc';
import Header from '../components/header/Header';
import Join from '../components/join/Join';

function Home() {
  return (
    <div>
      <div className='sticky top-0 z-40'>
        <Header />
      </div>
      <Join />
      <Desc />
    </div>
  );
}

export default Home;
