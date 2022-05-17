import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import continueShoppingImg from '../../../../assets/img/shopping.jpg'

const Main = styled.div`
display: flex;
h1{
    font-weight: 700;
    font-family: "Urbanist";
  font-size: 16px;
  line-height: 26px;
  color: #1d1f22;
}
 h2{
    font-weight: 600;
    font-family: "Urbanist";
  font-size: 16px;
  line-height: 26px;
  color: #1d1f22;
 }
`
const Empty = styled.div`
font-family: "Urbanist";
font-weight: 700;
font-size: 20px;
line-height: 26px;
color: #1d1f22;
text-align: center;
margin-bottom: 20px;
`
const Continue = styled.div`
 
`
const CImg = styled.div`
 
`



export class Header extends Component {
  render(){
    const {length, homepage} = this.props;
   
    return(
      <>
      <Main>
      <h1>My Bag.&nbsp;</h1>
          <h2>{length + " items"}</h2>
      </Main>
      {length === 0? (
          <Empty>YOUR BASKET IS EMPTY</Empty>
      ) : (""
          /*<Continue>
              <CImg>
                  <img src={continueShoppingImg} alt={""} />
                  <Link to ="/" onClick={homepage}>
                    <button className="continue">CONTINE SHOPPING</button>
                </Link>
              </CImg>
          </Continue> */
      )
    }
      </>
    );
  }
}

export default Header;