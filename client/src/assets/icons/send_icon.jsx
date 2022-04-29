import React, { Component } from "react";

export class CartIcon extends Component {
  render() {
    return (
        <svg 
        width="20px" 
        height="20px" 
        viewBox="0 0 20 20" 
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z"/>
        </svg>
    );
  }
}

export default CartIcon;
