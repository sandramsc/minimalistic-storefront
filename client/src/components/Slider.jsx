import React from 'react';
import styled from 'styled-components';
import ArrowLeft from '../assets/icons/slider_left';
import ArrowRight from '../assets/icons/slider_right';
import Banner from '../assets/img/banner.png';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #FF5757;
    position: relative;
    overflow: hidden;
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
    cursor: pointer;
    opacity: 0.7;
    z-index: 2;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
`;

const Wrapper = styled.div`
    height: 100%;
    displsy: flex;
    transform: translateX(-100px)
`;

const Slide = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   background-color: #${props=>props.bg}
`;
const ImgContainer = styled.div`
   height: 100%;
   flex: 1;
`;
const Image = styled.img`
    height: 80%;
    width: 100%;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: black;
color:white;
cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {}
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeft />
        </Arrow>
        <Wrapper>
            <Slide bg="#FF5757">
                <ImgContainer>
                    <Image src={Banner} />
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALE!</Title>
                    <Desc>GET A FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide bg="#ff0028">
            <ImgContainer>
                <Image src={Banner} />
            </ImgContainer>
            <InfoContainer>
                <Title>CLOTHES SALE!</Title>
                <Desc>GET A FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                <Button>SHOW NOW</Button>
            </InfoContainer>
        </Slide>
        <Slide bg="#BF0A30">
        <ImgContainer>
            <Image src={Banner} />
        </ImgContainer>
        <InfoContainer>
            <Title>TECH SALE!</Title>
            <Desc>GET A FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
            <Button>SHOW NOW</Button>
        </InfoContainer>
    </Slide>
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRight />
        </Arrow>
    </Container>
  );
};

export default Slider