import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//import Product from './Product';
import { useQuery, gql } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex: wrap;
    justify-content: space-between;
`;


function ProductList() {
  const {error, loading, data} = useQuery(GET_PRODUCTS);
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    if(data) {
      setProducts(data.category.products)
      //console.log(data.category.products)
    }
  }, [data]);
  if(loading) return <h1>Loading...</h1>
  if (error) return <div>There was an error</div>;
  
  return (
    <Container>
     {""}
     {products.map((items) => {
       return(
        <h6 key={items.id}>{items.name}</h6>
       )
      
     })}
    </Container>
  )
}

export default ProductList;