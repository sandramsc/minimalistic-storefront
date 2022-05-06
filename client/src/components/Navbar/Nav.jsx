/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from "react";
import styled from 'styled-components';
import NavCart from '../../assets/icons/cart_icon';
import ScrollBtn from './ScrollBtn'
import './Navbar.css'
import CurrencyOption from './CurrencyOptions'
import Logo from '../../assets/icons/logo';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
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
                <CurrencyOption setCurrency={this.props.setCurrency}/>
                <NavCart 
                miniCart={this.props.miniCart}
                currentCurrency={this.props.currentCurrency}
                increaseQty={this.props.increaseQty}
                decreaseQty={this.props.decreaseQty}
                totalSum={this.props.totalSum}
                checkOut={this.props.checkOut}
                /> 
            </MenuItem>
        </Container>
      )
}

}

export default Nav;