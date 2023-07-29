import React from 'react';
import Hero from './Hero';
import MidHero from './MidHero';
import CardsSection from './CardsSection';
import Promo from './Promo';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './__test__/home.css'
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MidHero />
      <CardsSection />
      <Promo />
      <Footer />
    </>
  );
};

export default Home;
