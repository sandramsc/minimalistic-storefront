import React, { Component } from "react";
import { GET_PRODUCT } from '../../../../graphql/queries';
import client from "../../../../graphql/client";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BasketIcon from "../../../../assets/icons/cart_icon";

const Container = styled.div`
position: relative;

a{
    color: inherit;
    text-decoration: inherit;
}
&:hover {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Name = styled.div`
font-family: "raleway";
font-weight: 300;
font-size: 18px;
line-height: 28px;
color: #1d1f22;
margin-top: 24px;
`;

const Item = styled.div.attrs(props => ({
    className:props.className,
}))`

  
`;
const Price = styled.div`
font-family: "raleway";
font-weight: 500;
font-size: 18px;
line-height: 28px;
color: #1d1f22;
`;
const NoStock = styled.div`
color: #000000;
font-family: "raleway";
font-weight: 400;
font-size: 24px;
line-height: 38.4px;
position: absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
top: 150px;
`;
const AddToBasket = styled.div`
display: none;
position: absolute;
bottom: 70px;
right: 25px;
border-radius: 50%;
background-color: rgba(94, 206, 123, 1);
width: 52px;
height: 52px;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
&:hover {
    transform: scale(1.1);
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export class Product extends Component {
    // fetch product by id and add to cart with attributes added after
    addToBasket = () => {
        client.query({query: GET_PRODUCT,
                variables: { id: this.props.product.id },
        })
        .then((output) => {
            const product = output.data.product;
            let chosenAttributes = [];

            if(product.attributes) {
                chosenAttributes = Array(product.attributes.length).fill(0);
            }
            this.props.addToBasket({ ...product, chosenAttributes });
        })
        .catch((error) => console.log(error));
    };

    render(){
        const { prices, name, inStock, id, gallery } = this.props.product;
        const price = prices.find((due) => {
            return due.currency.label === this.props.currentCurrency;
          });

            return (
                <Container>
                    <Link to={"/product/" + id}>
                    <div className={inStock ? "addToBasket" : "outOfStock"}>
                    <img
                        src={gallery[0]}
                        alt=""
                      />
                    <Name>{name}</Name>
                    <Price>{price.currency.symbol + "" + price.amount}</Price>
                    {inStock ? "" : <NoStock>OUT OF STOCK</NoStock>}
                    </div>
                    </Link>
                    {inStock ? 
                    ( <AddToBasket onClick ={this.addToBasket}>
                        <BasketIcon />
                    </AddToBasket>
                    ) : ("")}
                </Container>
              );
    
    }
}
export default Product;