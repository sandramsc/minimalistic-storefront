import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BasketIcon from '../../../../assets/icons/cart_icon';

const Container = styled.div.attrs(props => ({
  className: props.className,
}))`
 
&.false {
  display: none;
}
`

const Empty = styled.div`
font-family: "Raleway";
font-weight: 700;
font-size: 20px;
line-height: 26px;
color: #1d1f22;
text-align: center;
margin-bottom: 20px;
`
const Icon = styled.div`
position: relative;
`
const Button = styled.div`
height: 40px;
width: 40px;
display: flex;
justify-content: center;
align-items: center;
&:hover{
    cursor: pointer;
    background-color: rgb(255, 235, 240);
}
`
const Length = styled.div`
position: absolute;
top: -8px;
right: -8px;
z-index: 1;
font-family: "Raleway";
width: 16px;
height: 16px;
line-height: 14px;
font-weight: 700;
font-size: 14px;
color: white;
background-color: #1d1f22;
border-radius: 50%;
text-align: center;
`

export class MBcount extends Component {
  render(){
      //mini basket number of items display 
    const {length, setPopMBaket} = this.props;
   
    return(
     <Button onClick={setPopMBaket}>
         <Icon>
            <BasketIcon />
            {length === 0 ? "" : <Length>{length}</Length>}
         </Icon>
     </Button>
    );
  }
}

export default MBcount;