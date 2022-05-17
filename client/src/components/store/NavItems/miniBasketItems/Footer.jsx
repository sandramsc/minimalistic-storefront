import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

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
  font-weight: 700
}

`
const Button = styled.div.attrs(props => ({
  className: props.className,
}))`
display: flex;
  justify-content: space-between;
  & .viewBag {
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
    background: #cdf0d2;
    cursor: pointer;
  }
  &:active{
    background: #9adfa6;
  }
  }
    & .checkout{
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
export class Footer extends Component {
  render(){
    const {setViewMB, length, checkout, sumTotal} = this.props;
    if (length === 0) return "";
    return(
      <div>
      <MBSum>
        <p>Total</p>
        <p>{sumTotal()}</p>
      </MBSum>
      <Button>
        <Link to ="/basket" onClick={setViewMB}>
          <button className="viewBag">VIEW BAG</button>
        </Link>
        <Link to ="/" onClick={checkout}>
          <button className="checkout">CHECKOUT</button>
        </Link>
      </Button>
      </div>
    );
  }
}

export default Footer;