//import { onError } from '@apollo/client/link/error';
import { ApolloClient, InMemoryCache } from "@apollo/client";

  /*const errorLink = onError(({ graphqlErrors, networkError}) => {
    if(graphqlErrors){
      graphqlErrors.map(({message, location,  path}) => {
        return (alert(`Graphql error ${message}`))
      });
    }
  });
  
  const link = from([
    errorLink,
    new HttpLink({ uri: 'http://localhost:4000' }),
  ]); */

  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache({
      typePolicies: {
        AttributeSet: {
          keyFields: ["id", "name", "items"],
        },
      },
    }),
    //link:link,
  });

export default client;