/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React from 'react';
//import Home from './pages/Home';
import Main from './pages/Main';
//import { Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider, 
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const App = () => {
  return (
  <ApolloProvider client={client}>
    <div className="App">
      <Main />
    </div>
  </ApolloProvider>
  )
};

export default App;