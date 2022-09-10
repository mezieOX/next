import React from 'react';
import Cards from '../components/cards/Cards';
import Creative from '../components/creatives/Creative';
import Desc from '../components/desc/Desc';
import Header from '../components/header/Header';
import Hulu from '../components/hulu/Hulu';
import Join from '../components/join/Join';
import Layout from '../components/layout/Layout';
import Learn from '../components/learn/Learn';
import Newsletter from '../components/newsletter/Newsletter';

function Home() {
  return (
    <Layout>
      <div className='mt-40'>
        <Join />
        <Desc />
        <div className="">
          <Cards />
          <Hulu />
          <Creative />
          <Learn />
          <Newsletter />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
