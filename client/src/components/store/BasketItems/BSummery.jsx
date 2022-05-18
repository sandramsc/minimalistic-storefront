import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'


const BTax = styled.div`

`;


const BSum= styled.div`

`;



const BQnty= styled.h3`

`;

const Button = styled.div.attrs(props => ({
    className: props.className,
  }))`
  display: flex;
    gap: 16px;
    align-items: center;
    justify-content:center;
    & .viewBag {
      width: 138px;
      height: 40px;
      padding: 12px 22px;
      font-family: "Urbanist";
      font-weight: 600;
      font-size: 14px;
      line-height: 14px;
      background-color: white;
      border: 1px solid #26282a;
    &:hover{
      background: #cdf0d2;
      border:1px solid #3fa35a;
      cursor: pointer;
    }
    &:active{
      background: #9adfa6;
    }
    }
      & .checkout{
        width: 138px;
        height: 40px;
        padding: 12px 22px;
        font-family: "Urbanist";
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;
    background-color: #5ece7b;
    border: 0px;
    color: white;
    &:hover{
      background: #3fa35a;
    cursor: pointer;
    border:1px solid #cdf0d2;
    }
    &:active{
      background: #3fa35a;
    color: #26282a;
    }
    }
  `



export class BSummery extends Component {

    render() {
        const {length, order, sumTotal, taxSum} = this.props;
        if (length === 0) return "";

    return(
      <>
        <BTax>
        <p>Tax 21%: </p>
        <p>{taxSum()}</p>
        </BTax>

      

        <BSum>
        <p>Total: </p>
        <p>{sumTotal()}</p>
        </BSum>

      <Button>
        <Link to ="/" onClick={order}>
          <button className="order">ORDER</button>
        </Link>
      </Button>
      </>
    );
  
           
    }
}

export default BSummery;