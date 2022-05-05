/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React from 'react';
//import ProductList from './components/ProductList';
import Main from './pages/Main';
import {ApolloProvider} from "@apollo/client";
import client from './graphql/client';

function App(){
  return (
    <ApolloProvider client={client}>
        {" "}
      <Main />
    </ApolloProvider>
  )
};

export default App;