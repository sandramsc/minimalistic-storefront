import { gql } from "@apollo/client";

// fetch all categories
export const GET_CATEGORIES = gql`
  query fetchCategory {
    categories {
      name
    }
  }
`;

// fetch all products in a specific category
export const GET_ALL_PRODUCTS = gql`
query fetchProducts {
  category {
    products {
      id
      name
      inStock
      gallery
      prices {
        currency {
          symbol
        }
        amount
      }
    }
  }
}
`;

// fetch a specific product
export const GET_PRODUCT = gql`
  query fetchProduct ($id: String!) {
    product(id: $id) {
      id
      name
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

// fetch all currencies
export const GET_CURRENCIES = gql`
  query fetchCurrencies {
    currencies {
      label
      symbol
    }
  }
`;