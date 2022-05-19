/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';
import PayPal from '../../../../assets/icons/mode2_icon';
import CreditCard from '../../../../assets/icons/mode1_icon'; 
import {Link} from 'react-router-dom';

const Container = styled.div`
  padding: 150px 0px 200px 250px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  height: 25rem;
  width: 40rem;
  background-color: #9adfa6;
  border-radius: 15px;
  justify-content: center;
`;
const PaymentContainer = styled.div`
font-family: "Urbanist";
  flex-flow: row;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
`;
const PaymentMode = styled.div`
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
const Title = styled.h2`
  margin-bottom: 3rem;
  color: white;
  justify-contet: center;
  align-items: center;
`;
const Button = styled.div.attrs(props => ({
  className: props.className,
}))`
  display: flex;
  margin-bottom: 2rem;
  color: white;
  justify-contet: center;
  align-items: center;
  
  & .home{
            width: 205px;
            height: 40px;
            padding: 12px 22px;
            font-size: 16px;
            font-family: "Urbanist";
            font-weight: 600;
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
`;
class Payment extends Component {
    render() {
    
        return (
            <Container>
            <Wrapper>
              <Title>Payment Options</Title>
              <PaymentContainer>
                <PaymentMode>
                <Link to ="/">
                <PayPal />
                </Link>
                </PaymentMode>
                <PaymentMode>
                <Link to ="/">
                <CreditCard />
                </Link>
                </PaymentMode>
              </PaymentContainer>

              <Button>
                <Link to ="/">
                  <button className="home">CONTINUE SHOPPING</button>
                </Link>
              </Button>
            </Wrapper>
            </Container>
          );
    }
}
  
export default Payment;


  
     
     
     
  