import React, { Component } from "react";
import styled from 'styled-components';
import MinusIcon from '../../../assets/icons/minus_icon';
import PlusIcon from '../../../assets/icons/plus_icon';

const Container = styled.div`
width: 45px;
height: 180px;
margin-right: 11px;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover {
    cursor: pointer;
    background-color: rgb(255, 250, 250);
  }
&:active {
    background-color: rgb(255, 235, 240);
  }
  p {
    font-family: "Urbanist";
font-weight: 500;
font-size: 24px;
color: #1d1f22;
margin: 0px;
text-align: center;
  }
`;
const Button = styled.div`
width: 45px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #1d1f22;
`;

export class ItemQnty extends Component {
    render() {
        const { idx, qnty, plusQnty, minusQnty, basketItems } = this.props;
        return(
            <Container>
            {basketItems.length === 0 && <div>Basket is empty</div>}
                  <Button onClick={() => minusQnty(idx) } >
                  <MinusIcon />
                  </Button>
                  <p>{qnty}</p>
                  <Button onClick={() => plusQnty(idx) }>
                  <PlusIcon />
                  </Button>
            </Container>
        );
  }
}

export default ItemQnty;
