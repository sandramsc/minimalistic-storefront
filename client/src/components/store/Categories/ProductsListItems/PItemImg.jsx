import React, { Component } from 'react';
import styled from 'styled-components';

const ImgShowcase= styled.div`
display: flex;
flex-direction: column;
width: 120px;
margin-right: 10px;
flex-shrink: 0;
height: 530px;
overflow-y: auto;
overflow-x: hidden;
&::-webkit-scrollbar {
    width: 8px;
  }

&::-webkit-scrollbar-track {
    background: rgb(223, 223, 225);
    border-radius: 8px;
}

&::-webkit-scrollbar-thumb {
    background: rgb(169, 167, 167);
    border-radius: 8px;
  }
  
&::-webkit-scrollbar-thumb:hover {
    background: rgb(126, 126, 126);
    border-radius: 8px;
  }

&::-webkit-scrollbar-thumb:active {
    background: rgb(90, 90, 90);
    border-radius: 8px;
  }

img{
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 0px 0px 10px 0px;
    &:hover{
        cursor: pointer;
    transform: scale(1.1);
    }

}

`;
const CenterImg= styled.div`
width: 50%;
max-height: 80vh;
box-sizing: border-box;
display: flex;
justify-content: center;

div{
    max-height: 100%;
    img{
        object-fit: scale-down;
    max-width: 100%;
    max-height: 100%;
    }
}
`;

const Gallery= styled.div`

`;

export class PItemInfo extends Component {
    constructor(props){
        super(props);
       this.thumbImg=React.createRef();
    }

    render(){
        const { gallery, name } = this.props;
        return(
            <>
            <ImgShowcase>
            {gallery.map((item, idx)=>(
                <Gallery key={item}>
                <img src={item} alt={name + idx}
                    onClick={()=>{this.thumbImg.current.src = item;
                }} />
                </Gallery>
                    
            ))}
            </ImgShowcase>
            <CenterImg>
                <div>
                <img ref={this.thumbImg} src={gallery[0]} alt={name + " center img"}/>
                </div>
            </CenterImg>
            </>
        );
    }
}
export default PItemInfo;