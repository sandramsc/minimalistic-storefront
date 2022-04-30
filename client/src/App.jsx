/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
     </div>
  )
};

export default App;