/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React from 'react';
import styled from 'styled-components';
import Cart from '../assets/icons/cart_icon';
import Logo from '../assets/icons/logo';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Center = styled.div`
    flex: 4;
    display: flex;
    align-items: center;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
    margin-left: 25px;
`;


const Nav = () => {
  return (
    <Container>
        <Wrapper>
        <Center>
            <Link to="/" style={{textDecoration: "none", color: "black"}}><Logo /></Link>
        </Center>
        <Right>
            <MenuItem>
                    <Cart />
            </MenuItem>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Nav;