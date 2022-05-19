/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../components/store/Navigation/Nav';
import Basket from '../components/store/Basket';
import Products from '../components/store/Categories/ProductsList/Products';
import ProductDesc from '../components/store/Categories/ProductsListItems/ProductDesc';
import '../App.css';
import Payment from '../components/store/NavItems/miniBasketItems/Payment';

export class Main extends Component {
  constructor(props){
    super(props);
    //enbales currency change in respective component
    this.state = {
      currentCurrency: "",
      currentCategory: "",
      basket: [],
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

    // order basket clears main basket
    order = () => {
      alert("Thanks for shopping at Storefront!")
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
      tax = (sum + item.qnty * price[0].amount ) * 0.21;
  })
  return symbol + "" + tax.toFixed(2);
  };

  render() {
    const {  currentCurrency, currentCategory } = this.state;

    return(
      <Router>
          <Nav
            basket={this.state.basket}
            plusQnty={this.plusQnty}
            minusQnty={this.minusQnty}
            setCurrency={this.setCurrency}
            currentCurrency={this.state.currentCurrency}
            setCategory={this.setCategory}
            currentCategory={this.currentCategory}
            sumTotal={this.sumTotal}
            taxSum={this.taxSum}
            order={this.order}
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
                  sumTotal={this.sumTotal}
                  taxSum={this.taxSum}
                  order={this.order}
                  />}
                />
                <Route
                  exact path="/" 
                  element={
                    <Products
                    currentCurrency={this.state.currentCurrency}
                    currentCategory={this.state.currentCategory}
                    addToBasket= {this.addToBasket}
                    />}
                >
                </Route>
                <Route
                  path="/payment" 
                  element={<Payment />}>
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