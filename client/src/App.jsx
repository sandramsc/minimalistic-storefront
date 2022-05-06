/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import ProductList from './components/ProductList';
import Nav from "./components/Navbar/Nav";
import './App.css'


export class Main extends Component {
  constructor(props){
    super(props);
    //enbales currency change in respective component
    this.state = {
      currentCurrency: "",
      currentCategory: "",
    }
  }

  // currency label
  setCurrency = (currentCurrency) => {
    this.setState((prev) => {
      return { ...prev, currentCurrency};
    });
  };

  // category
  setCategory = (currentCategory) => {
    this.setState((prev) => {
      return { ...prev, currentCategory };
    });
  }
  
  render() {
    const {  currentCurrency, currentCategory } = this.state;

    return(
      <Router>
          <Nav 
            currentCurrency={this.state.currentCurrency}
            setCurrency={this.setCurrency}
            setCategory={this.setCategory}
            currentCategory={this.currentCategory}
          />
      </Router>
    )
  }
}
export default Main;