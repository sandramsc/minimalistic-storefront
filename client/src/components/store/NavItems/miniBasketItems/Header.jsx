import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import continueShoppingImg from '../../../../assets/img/shopping.jpg'

const MBSum = styled.div.attrs(props => ({
  className: props.className,
}))`
 
&.false {
  display: none;
}
`
const Continue = styled.div`
 
`
const Empty = styled.div`
 
`
const CImg = styled.div`
 
`

export class Header extends Component {
  render(){
    const {length, homepage} = this.props;
   
    return(
      <>
      <div>
      <h1>My Bag.&nbsp;</h1>
          <h2>{length + " products"}</h2>
      </div>
      {length === 0? (
          <Empty>YOUR CART IS EMPTY</Empty>
      ) : (
          <Continue>
              <CImg>
                  <img src={continueShoppingImg} alt={""} />
                  <Link to ="/" onClick={homepage}>
                    <button className="continue">CONTINE SHOPPING</button>
                </Link>
              </CImg>
          </Continue>
      )
    }
      </>
    );
  }
}

export default Header;