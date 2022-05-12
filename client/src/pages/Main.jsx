/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import ProductList from '../components/ProductList';
import Nav from "../components/store/Navigation/Nav";
import '../App.css'
import Basket from "../components/store/Basket/Basket";
import Products from "../components/store/Categories/Products";
import ProductDesc from "../components/store/Categories/ProductDesc";
//import { ClassNames } from "@emotion/react";


export class Main extends Component {
  constructor(props){
    super(props);
    //enbales currency change in respective component
    this.state = {
      currentCurrency: "",
      currentCategory: "",
      basket: [],
      togglePopUp: "false",
    }
  }
  // add item to cart with selected atrributes
  addToBasket = (item) => {
    let addedToBasket = false;
    this.state.basket.forEach((itemAddedToBasket, itemIdx) => {
      if (item.id === itemAddedToBasket.item.id) {
        const basketChoice = itemAddedToBasket.item.chosenAttributes;
        addedToBasket = true;
        item.chosenAttributes.forEach((attr, attrIdx) => {
          if (attr !== basketChoice[attrIdx]) {
            addedToBasket = false;
          }
        })
        if(addedToBasket) {
          this.plusQnty(itemIdx)
        }
      }
    });
    if (!addedToBasket) {
      this.setState.apply((previous)=> {
        const basket = [...previous.basket];
        basket.push({ item, qunty: 1 });
        return { ...previous, basket}
      })
    }
    this.togglePopUp();
  };

  // PopUp
  togglePopUp = () => {
    let togglePopUpStyle = "pop";
    this.setState((previous)=> {
      return { ...previous, togglePopUpStyle }
    })
    setTimeout(() => {
      togglePopUpStyle = "false";
      this.setState((previous)=> {
        return { ...previous, togglePopUpStyle }
      })
      
    }, 2000)
  }

  // currency label
  setCurrency = (currentCurrency) => {
    this.setState((previous) => {
      return { ...previous, currentCurrency};
    });
  };

  // category
  setCategory = (currentCategory) => {
    this.setState((previous) => {
      return { ...previous, currentCategory };
    });
  }
  
  render() {
    const {  currentCurrency, currentCategory } = this.state;

    return(
      <Router>
        <div className={this.state.togglePopUp}>
          You Just Added An Item To Your Basket!
        </div>
          <Nav
            basket={this.state.basket}
            setCurrency={this.setCurrency}
            plusQnty={this.plusQnty}
            minusQnty={this.minusQnty}
            currentCurrency={this.state.currentCurrency}
            setCategory={this.setCategory}
            currentCategory={this.currentCategory}
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
                  />
                }
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
                    />
                  }
                />
              </Routes>
            ) : ("")
          }
      </Router>
    );
  }
}
export default Main;