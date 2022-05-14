import React, { Component } from "react";
import '../BasketItems/Basket.css';
import BasketItem from "../BasketItems/BasketItem";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
margin: 80px 0px;
`;
const CartNav = styled.div`
font-family: "Urbanist";
font-weight: 700;
font-size: 32px;
margin-bottom: 60px;
color: #1d1f22;
`;

export class Basket extends Component {
    render(){
    const { basket, currentCurrency, plusQnty, minusQnty } = this.props;

      return(
          <Container>
              <CartNav>CART</CartNav>
                {basket.map((item, idx) => {
                    let price = item.product.prices.find((due) => {
                        return due.currency.label === currentCurrency;
                    });

                    return(
                        <BasketItem 
                        key={item.product.id + "" + idx}
                        idx={idx}
                        minusQnty={minusQnty}
                        plusQnty={plusQnty}
                        item={item}
                        price={price}
                        />
                    )
                })}
          </Container>
      );
    }
}

export default Basket;