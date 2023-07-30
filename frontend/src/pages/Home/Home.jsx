import React from 'react';
import Hero from './Hero';
import MidHero from './MidHero';
import CardsSection from './CardsSection';
import Promo from './Promo';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useFetch } from '../../Hooks/useFetch';
import './__test__/home.css'
const Home = () => {
  const {data} = useFetch('http://localhost:3000/tours/api/places');
  return (
    <>
      <Navbar />
      <Hero data={data}v/>
      <MidHero />
      <CardsSection data={data} />
      <Promo />
      <Footer />
    </>
  );
};

export default Home;
