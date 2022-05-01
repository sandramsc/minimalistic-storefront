import { gql } from "@apollo/client";


// get all products in a specific category
export const GET_ALL_PRODUCTS = gql`
  query GetProducts {
    category{
      products {
        id
        name
        inStock
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

// get all categories
export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

// get a specific product
export const GET_PRODUCT = gql`
  query GetProduct {
    product{
      name
      id
      inStock
      gallery
      description
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      brand
    }
  }
`;

// get all currencies query
export const GET_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;