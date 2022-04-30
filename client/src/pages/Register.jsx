import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CopyRightText from '../components/CopyrightText';


const Register = () => {
  return (
    <div className="App">
     <NavBar />
     <div className="main">
    <div>Register</div>
     <Footer />
     <CopyRightText />
     </div>
     </div>
  )
}

export default Register;