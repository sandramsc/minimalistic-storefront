import React from 'react';
import styled from 'styled-components';
import  Send  from '../assets/icons/send_icon';

const Container = styled.div`
    height: 40vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 65px;
    margin-bottom: 20px;
`;
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
`;
const Input = styled.input``;
const Button = styled.button``;

const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates on events & products at Storefont.</Desc>
        <InputContainer>
            <Input placholder="Your email address..."/>
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter;