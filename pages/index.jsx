import React from 'react';
import Cards from '../components/cards/Cards';
import Desc from '../components/desc/Desc';
import Header from '../components/header/Header';
import Hulu from '../components/hulu/Hulu';
import Join from '../components/join/Join';
import Layout from '../components/layout/Layout';

function Home() {
  return (
    <Layout>
      <div className='mt-40'>
        <Join />
        <Desc />
        <div className="">
          <Cards />
          <Hulu />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
