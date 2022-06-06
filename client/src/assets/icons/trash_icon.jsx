import React, { Component } from "react";

export class trashIcon extends Component {
  render() {
    return (
      <svg
      width="22px"
      height="22px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
      stroke="red"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      d="M7.5,9 L16.5,9 L16.5,19 L7.5,19 L7.5,9 Z M5,9 L19,9 M9.36363636,6 L14.3636364,6 L14.3636364,9 L9.36363636,9 L9.36363636,6 Z M10.5455,11 L10.5455,17 M13.5455,11 L13.5455,17"
    />
      </svg>
    );
  }
}

export default trashIcon;

