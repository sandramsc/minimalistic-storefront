/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Announcements from './components/Announcements';
import Slider from './components/Slider';

const App = () => {
  return (
    <>
    <Announcements />
     <NavBar />
     <Slider />
    </>
  )
};

export default App;