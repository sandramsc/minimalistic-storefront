import React, { Component } from "react";
import styled from 'styled-components';

const BasketItemImgSlider = styled.div`
width: 140px;
position: relative;
`;
const BasketItemImg = styled.img`
width: 140px;
height: 180px;
object-fit: cover;
`;



export class ItemImg extends Component {
    constructor (props) {
		super(props);
		this.state = {
			currentImgIndex: 0
		};
		

}
}
export default ItemImg;





