import React from 'react';
import styled from 'styled-components';
import Cart from '../assets/icons/cart_icon';

const Container = styled.div``;
const Image = styled.img`
  height: 80%;
`;
const Info = styled.div``;
const Icon = styled.div``;

const ProductCard = ({ item }) => {
  return (
    <Container>
        <Image src="item.img"/>
        <Info>
            <Icon>
                <Cart />
            </Icon>
        </Info>
    </Container>
  )
}

export default ProductCard;