import React from 'react';
//import styled from 'styled-components';
import { useQuery } from '@apollo/client';
//import Nav from '../components/Nav';
//import CopyRightText from '../components/CopyrightText';
//import ProductCard from '../components/ProductCard';
import { GET_ALL_PRODUCTS } from '../graphql/queries';
//import ProductList from '../components/ProductList';
//import ProductCard from '../components/Product';

const Main = () => {
  const {loading, error, data} = useQuery(GET_ALL_PRODUCTS)
  if(loading) return <h1>Loading...</h1>
  if(data){
    console.log(data)
  }

  return (
    <div className="App">
      <h1>main page</h1>
    </div>
  ) 
}

export default Main;