import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div.attrs(props => ({
  className: props.className,
}))`
 
&.false {
  display: none;
}
`
const MBSum = styled.div.attrs(props => ({
  className: props.className,
}))`
display: flex;
justify-content: space-between;
font-family: "Urbanist";
font-weight: 500;
font-size: 16px;
line-height: 18px;
margin-bottom: 20px;
p{
  margin: 0px;
}
&.amount{
  font-weight: 700;
}
`
const Button = styled.div.attrs(props => ({
  className: props.className,
}))`
display: flex;
  justify-content: space-between;
  &.viewBag{
    width: 165px;
  height: 40px;
  padding: 12px 32px;
  font-family: "Urbanist";
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  background-color: white;
  border: 1px solid #1d1f22;
  &:hover{
    background: rgb(243, 235, 235);
    cursor: pointer;
  }
  &:active{
    background: rgb(230, 206, 206);
  }
  }
  &.checkout{
    width: 165px;
  height: 40px;
  padding: 12px 32px;
  font-family: "Urbanist";
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  background-color: #5ece7b;
  border: 0px;
  color: white;
  &:hover{
    background: #3fa35a;
  cursor: pointer;
  }
  &:active{
    background: #3fa35a;
  color: #1d1f22;
  }
  }
`
const But = styled.div`
 
`
export class Footer extends Component {
  render(){
    const {setPopMBasket, length, checkout, sumTotal} = this.props;
    if (length === 0) return "";
    return(
      <Container>
      <MBSum>
        <p>Total</p>
        <div className="amount">{sumTotal()}</div>
      </MBSum>
      <Button>
        <Link to ="/basket" onClick={setPopMBasket}>
          <button className="viewBag">VIEW BAG</button>
        </Link>
        <Link to ="/" onClick={checkout}>
          <button className="checkout">CHECKOUT</button>
        </Link>
      </Button>
      </Container>
    );
  }
}

export default Footer;