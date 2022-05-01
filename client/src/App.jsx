/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React from 'react';
import Home from './pages/Home';
import Main from './pages/Main';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (

    <div className="App">
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
     </div>

  )
};

export default App;