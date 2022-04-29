/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Promotion from './components/PromotionBanner';
import Slider from './components/Slider';
import Newsletter from './components/NewsLetter';

const App = () => {
  return (
    <>
    <Promotion />
     <NavBar />
     <Slider />
     <Newsletter />
    </>
  )
};

export default App;