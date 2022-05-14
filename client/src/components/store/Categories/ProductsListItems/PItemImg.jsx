import React, { Component } from 'react';
import styled from 'styled-components';

const ImgShowcase= styled.div`
display: flex;
flex-direction: column;
margin-right: 10px;
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

 /*   componentDidMount(){
        if (this.props.gallery[0]){
            this.setState({thumbnailURL: this.props.gallery[0]});
        }
    }

    componentDidUpdate(prevImg){
        if(prevImg !== this.props){
            if(this.props.gallery[0]){
                this.setState({thumbnailURL: this.props.gallery[0]})
            }
        }
    }

    // changes the chosen img URL
    changeImg = (URL) => {
        this.setState({thumbnailURL: URL});
    };
*/
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