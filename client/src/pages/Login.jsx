import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CopyRightText from '../components/CopyrightText';


const Login = () => {
  return (
    <div className="App">
    <NavBar />
    <div className="main">
   <div>Login</div>
    <Footer />
    <CopyRightText />
    </div>
    </div>
  )
}

export default Login