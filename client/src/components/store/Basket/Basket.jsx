/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import BasketItem from '../BasketItems/BasketItem';
import BSummery from '../BasketItems/BSummery';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px 0px;
`;
const CartNav = styled.div`
    font-family: "Urbanist";
    font-weight: 700;
    font-size: 28px;
    margin-bottom: 48px;
    color: #26282a;
`;


export class Basket extends Component {
    render(){
    const { basket, currentCurrency, plusQnty, minusQnty, order, sumTotal, taxSum } = this.props;
   
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
                        item={item}
                        minusQnty={minusQnty}
                        plusQnty={plusQnty}
                        price={price}
                        />
                    )
                })}
                    <BSummery
                    taxSum={taxSum}
                    sumTotal={sumTotal}
                    order={order}
                    length={basket.length}
                    />
        </Container>
      );
    }
}

export default Basket;