import React, { Component } from "react";
import styled from 'styled-components';
import MinusIcon from '../../../assets/icons/minus_icon';
import PlusIcon from '../../../assets/icons/plus_icon'; 


const Button = styled.div`
width: 24px;
height: 24px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #1d1f22;
&:hover{
  cursor: pointer;
  background-color: rgb(255, 250, 250);
}
&:active{
  background-color: rgb(255, 235, 240);
}
`
const Container = styled.div`
width: 24px;
height: 140px;
margin-right: 11px;
display: flex;
flex-direction: column;
justify-content: space-between;
p{
  
  font-family: "Raleway";
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #1d1f22;
  margin: 0px;
  text-align: center;
}
`


export class MBItemQnty extends Component {
  render() {
    const { idx, qnty, plusQnty, minusQnty, basketItems } = this.props;
        return(
            <Container>
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

export default MBItemQnty;