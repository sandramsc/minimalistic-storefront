import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import CopyRightText from '../components/CopyrightText';

const Main = () => {
  return (
    <div className="App">
     <Nav />
     <div className="main">
     <CopyRightText />
     </div>
     </div>
  )
}

export default Main