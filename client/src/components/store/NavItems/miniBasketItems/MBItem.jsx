import React, { Component } from 'react';
import styled from 'styled-components';
import MBItemQnty from './MBItemQnty';
import MBItemAttr from './MBItemAttr';


const Container = styled.div`
margin: 20px 0px;
display: flex;
`
const MBImg = styled.div`
width: 140px;
img{
  width: 140px;
  height: 140px;
  object-fit: cover;
}
`
const MBAttr = styled.div`
min-width: 24px;
height: 24px;
border: 1px solid #1d1f22;
box-sizing: border-box;
padding: 2px;
font-family: "Urbanist";
font-weight: 400;
font-size: 12px;
color: #1d1f22;
display: flex;
align-items: center;
justify-content: center;
margin-right: 4px;
margin-bottom: 4px;
`
const Info = styled.div`
width: 175px;
h3{
  font-family: "Urbanist";
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  color: #1d1f22;
  margin: 0px;
}
p{
  font-family: "Urbanist";
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #1d1f22;
  margin: 0px;
}
`



export class MBItem extends Component {
  constructor(props){
    super(props);
   this.mbImg=React.createRef();
}
  render() {
    const {  currentCurrency, idx, item, plusQnty, minusQnty} = this.props;
    const {product, qnty} = item;
    const { brand, name, attributes, chosenAttributes, gallery, prices} = product;

    let price = prices.find((due)=> { return due.currency.label === currentCurrency})
    
    return(
      <Container>
        <Info>
        <h3>{brand}</h3>
        <h3>{name}</h3>
        <p>{price.currency.symbol + " " + price.amount}</p>
        <MBAttr>
        {attributes.map((attr, attrIdx)=> {
            return(
              <MBItemAttr 
              attr={attr}
              attrIdx={attrIdx}
              chosenAttributes={chosenAttributes}
              key={attr.id} />
              )
        })}
        </MBAttr>
        </Info>
        <MBItemQnty 
              idx={idx}
              plusQnty={plusQnty}
              minusQnty={minusQnty}
              qnty={qnty} />
          <MBImg>
                
                <img ref={this.mbImg} src={gallery[0]} alt={name + " mb img"}/>
               
            </MBImg>
      </Container>

    );
  }
}

export default MBItem;