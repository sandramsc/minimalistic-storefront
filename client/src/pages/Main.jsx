/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import ProductList from '../components/ProductList';
import Nav from "../components/store/Navigation/Nav";
import '../App.css'


export class Main extends Component {
  constructor(props){
    super(props);
    //enbales currency change in respective component
    this.current = {
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
    const {  currentCurrency, currentCategory } = this.current;

    return(
      <Router>
          <Nav 
            currentCurrency={this.current.currentCurrency}
            setCurrency={this.setCurrency}
            setCategory={this.setCategory}
            currentCategory={this.currentCategory}
          />
      </Router>
    )
  }
}
export default Main;