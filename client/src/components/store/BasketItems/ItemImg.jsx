import React, { Component } from "react";
import styled from 'styled-components';
import LeftArrow from "../../../assets/icons/left_arrow";
import RightArrow from "../../../assets/icons/right_arrow";

const BasketItemImgSlider = styled.div`
width: 140px;
position: relative;
`;
const BasketItemImg = styled.img`
width: 140px;
height: 180px;
object-fit: cover;
`;
const Left = styled.div`
position: absolute;
top: 90px;
left: 9px;
background-color: #1d1f22;
padding: 1px;
display: flex;
align-items: center;
justify-content: center;
width: 15px;
height: 15px;
&:hover {
    cursor: pointer;
  }
`;
const Right = styled.div`
position: absolute;
top: 90px;
right: 9px;
background-color: #1d1f22;
padding: 1px;
display: flex;
align-items: center;
justify-content: center;
width: 15px;
height: 15px;
&:hover {
    cursor: pointer;
  }
`;


export class ItemImg extends Component {
    constructor (props) {
		super(props);
		this.state = {
			lastImg: 0,
		};
	}

	previousImg = (idx) => {
		if (this.state.lastImg > 0) {
			this.setState((previous) => {
				const lastImg = this.state.lastImg - 1;
				return { lastImg }
			});

		} else {
			this.setState((previous) => {
				const lastImg = this.props.gallery.length -1;
				return { lastImg };
			})
		}
	};
	
	nextImg = (idx) => {
		if (this.state.lastImg < this.props.gallery.length - 1) {
			this.setState((previous) => {
				const lastImg = this.state.lastImg + 1;
				return { lastImg };
			});
		} else {
			this.setState((previous) => {
				const lastImg = 0;
				return { lastImg }
			})
		}
	}
	
	
	render () {
        const { id, gallery } = this.props;

        return(
            <BasketItemImgSlider>
                <Left direction="left" onClick={ this.previousImg } >
                <LeftArrow/>
                </Left>
                <BasketItemImg src={gallery[this.state.currentImage]} alt={id + " image"} />
                <Right direction="right" onClick={ this.nextImg } >
                <RightArrow/>
                </Right>
            </BasketItemImgSlider>
        )
		
	}
}
export default ItemImg;





