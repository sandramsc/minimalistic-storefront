import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const MBSum = styled.div.attrs(props => ({
  className: props.className,
}))`
 
&.false {
  display: none;
}
`
const Button = styled.div`
 
`
export class Footer extends Component {
  render(){
    const {setViewMBasket, length, checkout, sumTotal} = this.props;
    if (length === 0) return "";
    return(
      <>
      <MBSum>
        <p>Total</p>
        <p className="amount">{sumTotal()}</p>
      </MBSum>
      <Button>
        <Link to ="/basket" onClick={setViewMBasket}>
          <button className="viewBag">VIEW BAG</button>
        </Link>
        <Link to ="/" onClick={checkout}>
          <button className="checkout">CHECKOUT</button>
        </Link>
      </Button>
      </>
    );
  }
}

export default Footer;