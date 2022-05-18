import React, { Component } from 'react';
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



export class Quantity extends Component {
  render(){
    const {length} = this.props;
   
    return(
      <>
      <Main>
      <h1>Quantity: </h1>
          <h2> {length + " items"}</h2>
      </Main>
      </>
    );
  }
}

export default Quantity;