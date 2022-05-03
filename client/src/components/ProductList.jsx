import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { GET_ALL_PRODUCTS } from '../graphql/queries';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex: wrap;
    justify-content: space-between;
`;

const ProductList = ({ id }) => {
  return (
    <Container>
    
    </Container>
  )
}

export default ProductList;