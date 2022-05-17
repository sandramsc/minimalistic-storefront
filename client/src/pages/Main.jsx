/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../components/store/Navigation/Nav';
import '../components/store/Categories//ProductsListItems/Categories.css'
import Basket from '../components/store/Basket';
//import EmptyBasket from '../assets/img/emptyBasket';
import Products from '../components/store/Categories/ProductsList/Products';
import ProductDesc from '../components/store/Categories/ProductsListItems/ProductDesc';
import styled from 'styled-components';
import '../App.css';

const ItemAdded = styled.div.attrs(props => ({
  className: props.className,
}))`
 
&.false {
  display: none;
}
`

export class Main extends Component {
  constructor(props){
    super(props);
    //enbales currency change in respective component
    this.state = {
      currentCurrency: "",
      currentCategory: "",
      basket: [],
      togglePopUp: "false",
      taxSum :"",
    }
  }
  // add item to cart with selected atrributes
  addToBasket = (product) => {
    let addedToBasket = false;
    this.state.basket.forEach((itemAddedToBasket, iIdx) => {
      if (product.id === itemAddedToBasket.product.id) {
        const basketChoice = itemAddedToBasket.product.chosenAttributes;
        addedToBasket = true;
        product.chosenAttributes.forEach((attr, aIdx) => {
          if (attr !== basketChoice[aIdx]) {
            addedToBasket = false;
          }
        })
        if(addedToBasket) {
          this.plusQnty(iIdx)
        }
      }
    });
    if (!addedToBasket) {
      this.setState((previous)=> {
        const basket = [...previous.basket];
        basket.push({product, qnty: 1 });
        return { ...previous, basket}
      });
    }
    this.togglePopUp();
  };

  // Basket item quantity increase
  plusQnty = (idx) => {
    this.setState((previous) => {
      const basket = [...previous.basket];
      const product = previous.basket[idx].product;
      const qnty = previous.basket[idx].qnty + 1;
      basket[idx] = {product, qnty};
      return { ...previous, basket}
    });
  };

   // Basket item quantity increase
   minusQnty = (idx) => {
 if (this.state.basket[idx].qnty > 1) {
  this.setState((previous) => {
    const basket = [...previous.basket];
    const product = previous.basket[idx].product;
    const qnty = previous.basket[idx].qnty - 1;
    basket[idx] = {product, qnty};
    return { ...previous, basket}
  });
 } else {
   this.setState((previous) => {
     const basket = previous.basket.filter((item, itemIdx) => {
       return idx !== itemIdx;
     });
     return { ...previous, basket}
   });
  }
};


  // PopUp
  togglePopUp = () => {
    let togglePopUpDesign = "popDesign";
    this.setState((previous)=> {
      return { ...previous, togglePopUpDesign }
    })
    setTimeout(() => {
      togglePopUpDesign = "false";
      this.setState((previous)=> {
        return { ...previous, togglePopUpDesign }
      })
      
    }, 3000)
  }

  // currency label
  setCurrency = (currentCurrency) => {
    this.setState((previous) => {
      return { ...previous, currentCurrency};
    });
  };

  // category list
  setCategory = (currentCategory) => {
    this.setState((previous) => {
      return { ...previous, currentCategory };
    });
  }

  // checkout basket clears basket
  checkOut = () => {
    alert("Your order has been placed!")
    this.state((previous)=> {
      const basket = [];
      return { ...previous, basket}
    })
  }

  // amount total based on set qnty & currency
  sumTotal = () => {
    let sum = 0;
    let symbol = "";
    this.state.basket.forEach((item) => {
      let price = item.product.prices.filter((due)=> {
        return due.currency.label === this.state.currentCurrency;
      });
      sum = sum + item.qnty * price[0].amount;
      symbol = price[0].currency.symbol;
    });
    return symbol + "" + sum.toFixed(2);
  };

  // tax
  taxSum = () => {
    let tax = 0;
    let sum = 0;
    let symbol = "";
    this.state.basket.forEach((item) => {
      let price = item.product.prices.filter((due)=> {
        return due.currency.label === this.state.currentCurrency;
      })
      sum = sum + item.qnty * price[0].amount;
      symbol = price[0].currency.symbol;
      tax = sum  * 0.14;
  })
  return symbol + "" + sum + tax.toFixed(2);
  }


  render() {
    const {  currentCurrency, currentCategory } = this.state;

    return(
      <Router>
        <ItemAdded className={this.state.togglePopUp}>
          You Just Added An Item To Your Basket!
        </ItemAdded>
          <Nav
            basket={this.state.basket}
            plusQnty={this.plusQnty}
            minusQnty={this.minusQnty}
            checkOut={this.checkOut}
            setCurrency={this.setCurrency}
            currentCurrency={this.state.currentCurrency}
            setCategory={this.setCategory}
            currentCategory={this.currentCategory}
            sumTotal={this.sumTotal}
          />
          
          {
            currentCategory !== "" && currentCurrency !=="" ? (
              <Routes>
                <Route 
                path="/basket"
                element={
                  <Basket 
                  basket={this.state.basket}
                  currentCurrency={this.state.currentCurrency}
                  plusQnty={this.plusQnty}
                  minusQnty={this.minusQnty}
                  />}
                />
                <Route
                  exact path="/" element={
                    <Products
                    currentCurrency={this.state.currentCurrency}
                    currentCategory={this.state.currentCategory}
                    addToBasket= {this.addToBasket}
                    />}
                >
                </Route>
                <Route 
                  path="/product/:productID"
                  element={
                    <ProductDesc 
                    currentCurrency={this.state.currentCurrency}
                    addToBasket = {this.addToBasket}
                    />}
                />
              </Routes>
            ) : ("")
          }
      </Router>
    );
  }
}
export default Main;