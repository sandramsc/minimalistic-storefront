import React from 'react';
import styled from 'styled-components';
import ArrowLeft from '../assets/icons/slider_left';
import ArrowRight from '../assets/icons/slider_right';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
`;

const Arrow = styled.div`
    width: 45px;
    height: 45px;
    background-color: white;
    border-radius: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
`;

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeft />
        </Arrow>
        <Arrow direction="right">
            <ArrowRight />
        </Arrow>
    </Container>
  )
}

export default Slider