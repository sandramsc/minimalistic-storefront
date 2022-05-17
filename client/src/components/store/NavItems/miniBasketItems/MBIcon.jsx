import React, { Component } from 'react';
import styled from 'styled-components';
import { BIcon } from '../../../../assets/icons/BIcon';


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
}
`
const Length = styled.div`
position: absolute;
top: -7px;
right: -7px;
z-index: 1;
font-family: "Urbanist";
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

export class MBIcon extends Component {
  render(){
      //mini basket number of items display 
    const {length, setViewMB} = this.props;
   
    return(
     <Button onClick={setViewMB}>
         <Icon>
            <BIcon />
            {length === 0 ? "" : <Length>{length}</Length>}
         </Icon>
     </Button>
    );
  }
}

export default MBIcon;