import React, { Component } from 'react';
import EmptyBasket from '../../../../assets/img/empty_cart.png';
import styled from 'styled-components';

const Main = styled.div`
display: flex;
h1{
  font-family: "Urbanist";
  font-size: 16px;
  line-height: 26px;
  color: #26282a;
  font-weight: 700;
}
 h2{
  font-family: "Urbanist";
  font-size: 16px;
  line-height: 26px;
  color: #26282a;
  font-weight: 500;
 }
`
const Empty = styled.div`
font-family: "Urbanist";
font-weight: 700;
font-size: 20px;
line-height: 26px;
color: #26282a;
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
          <Empty>YOUR CART IS EMPTY
          <div>
          <img src={EmptyBasket} alt=""/>
          </div>
          </Empty>
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