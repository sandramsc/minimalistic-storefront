/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React from 'react';
import NavBar from '../components/NavBar';
import Promotion from '../components/PromotionBanner';
import Slider from '../components/Slider';
import Newsletter from '../components/NewsLetter';
import Footer from '../components/Footer';


const Home = () => {
  return (
      <>
    <Promotion />
    <NavBar />
    <Slider />
    <Newsletter />
    <Footer />
    </>
  )
}

export default Home;