import React, { Component } from 'react';
import styled from 'styled-components';
import MBIcon from '../../../../assets/icons/cart_icon';
import MBItem from '../miniBasketItems/MBItem';
import Header from '../miniBasketItems/Header';
import Footer from '../miniBasketItems/Footer';

const Container = styled.div.attrs(props => ({
  className: props.className,
}))`
 
&.hidden {
    display: none;
}
&.mbDisplay {
    display: block;
    position: absolute;
    z-index: 1;
    top: 80px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(57, 55, 72, 0.22);
}
&.mbItems {
    display: flex;
    flex-direction: column;
    z-index: 10;
    background-color: white;
    position: absolute;
    width: 350px;
    max-height: 450px;
    overflow-y: auto;
    top: 80px;
    right: 100px;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    padding: 16px;
}
`
const Nav = styled.div`
 
`



export class MBItemQnty extends Component {
    constructor(props){
        super(props);
        this.state = {
            popMBasket: false,
        }
        // component ref
        this.ref = React.createRef();
    }
    // event listener for outside click on document
    componentDidMount() {
        document.addEventListener('click', this.handleClick.bind(this));
    }
    // removes ability to scroll if user wants to open or close mini basket
    componentDidUpdate(){
        if(this.state.popMBasket){
            document.body.style.position = "fixed";
            document.body.style.overflowY = "scroll";
            document.body.style.left = "0";
            document.body.style.right = "0";
        } else {
            document.body.style.position = "static";
            document.body.style.overflowY = "auto";
        }
    }
    // remove event listener from document
    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick.bind(this));
    }

    // handle mini basket
    setPopMBasket = () => {
        const popMBasket = !this.state.popMBasket;
        this.setState((previous)=> {
            return {...previous, popMBasket}
        })
    }
    // closes mini basket if user clicks outside
    handleClick(event){
        if (this.ref.current && !this.ref.current.contains(event.target)) {
            if (this.state.popMBasket){
                this.setPopMBasket();
            }
        }
    }

  render() {
const {currentCurrency, basket, plusQnty, minusQnty, checkout, sumTotal} = this.props;
return(
    <Container>
    <div className={this.state.popMBasket ? "mbDisplay" : "hidden"}></div>
    <Nav ref={this.ref}>
    <MBIcon 
    length={basket.length}
    setPopMBasket={this.setPopMBasket} />
    <div className={this.state.popMBasket ? "mbItems" : "hidden"}>
        <Header length={basket.length}/>
        {
            //basket items
            basket.map((item, idx)=>{
                return(
                    <MBItem  
                    key={"bItem: " + idx}
                    plusQnty={plusQnty}
                    minusQnty={minusQnty}
                    item={item}
                    idx={idx}
                    currentCurrency={currentCurrency}
                    />
                );
            })
        }
        <Footer 
        length={basket.length}
        setPopMBasket={this.setPopMBasket}
        sumTotal={sumTotal}
        checkout={checkout}
        />
    </div>
    </Nav>
    </Container>
);
  }
}

export default MBItemQnty;