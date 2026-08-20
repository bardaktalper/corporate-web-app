// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import SectorsGrid from '../components/Sectors/SectorsGrid';
import Representations from '../components/Representations/Representations';

const Home = () => {
  return (
    <main>
      <Hero />
      <SectorsGrid />
      <Representations />
    </main>
  );
};

export default Home;