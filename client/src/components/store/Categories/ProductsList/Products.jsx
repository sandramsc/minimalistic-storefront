import React, { Component } from 'react';
import { GET_PRODUCTS } from '../../../../graphql/queries';
import client from '../../../../graphql/client';
import styled from 'styled-components';
//import BasketIcon from './../../assets/icons/cart_icon';
import '../ProductsListItems/Categories.css';
import Product from './Product';


const CategoryNav = styled.div`
font-family: "Urbanist";
font-weight: 400;
font-size: 42px;
margin: 50px 0;
color: #26282a;
span {
    color: #5ece7b;
}

`;
const ProductList = styled.div`
display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 320px);
  margin-bottom: 80px;
`;


export class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
        };
    }

    // fetch products
    componentDidMount() {
        client.query({ query: GET_PRODUCTS,
                variables: {
                    category: this.props.currentCategory,
                },
            })
            .then((output)=> this.setState(()=> {
                    let products = output.data.category.products;
                    return {products};
                })
            )
            .catch((error)=> console.log(error));
    }

    // update products type by category if user changed category
    componentDidUpdate(prevCat) {
        if (this.props.currentCategory !== prevCat.currentCategory) {
            client.query({ query: GET_PRODUCTS,
                    variables: {
                        category: this.props.currentCategory,
                    },
                })
                .then((output) => this.setState(() => {
                    let products = output.data.category.products;
                    return { products };
                    })
                )
                .catch((error)=> console.log(error))
        }
    }

        render() {
            return(
                <>
                    <CategoryNav>
                        <span>{this.props.currentCategory.toUpperCase()}</span>
                    </CategoryNav>
                    <ProductList>
                        {this.state.products.map((product) => {
                            return(
                                <Product 
                                key={product.id + ""}
                                product={product}
                                addToBasket={this.props.addToBasket}
                                currentCurrency={this.props.currentCurrency}
                                />
                            );
                        })}
                    </ProductList>
                </>
            );
        }

}

export default Products;