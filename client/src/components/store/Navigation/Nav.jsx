/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollBtn from '../NavItems/ScrollBtn';
import '../NavItems/Navigation.css';
import CurrencyOption from '../NavItems/CurrencyOptions';
import Logo from '../../../assets/icons/logo';
import { Link } from 'react-router-dom';
import MiniBasket from '../NavItems/miniBasket/miniBasket';

const Container = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-left: -28px;
`
const Center = styled.div`
margin: 20px 0px;
width: 30%;
display: flex;
justify-content: center;
`;

const MenuItem = styled.div`
margin: 20px 0px;
display: flex;
align-items: center;
justify-content: flex-end;
width: 30%;
`;


export class Nav extends Component {
render() {
    return (
        <Container>
            <ScrollBtn
                currentCategory={this.props.currentCategory}
                setCategory={this.props.setCategory}
            />
            <Center>
                <Link to="/" ><Logo /></Link>
            </Center>
            <MenuItem>
                <CurrencyOption setCurrency={this.props.setCurrency} />
                <MiniBasket 
                basket={this.props.basket}
                currentCurrency={this.props.currentCurrency}
                plusQnty={this.props.plusQnty}
                minusQnty={this.props.minusQnty}
                totalSum={this.props.totalSum}
                checkOut={this.props.checkOut}
                /> 
            </MenuItem>
        </Container>
      )
}

}

export default Nav;