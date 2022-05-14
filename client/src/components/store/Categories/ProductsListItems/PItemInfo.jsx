import React, { Component } from 'react';
import styled from 'styled-components';
import PItemAttr from './PItemAttr';
import JsxParser from "react-jsx-parser";

const Info= styled.div`
width: 30%;
margin-left: 40px;
display: flex;
flex-direction: column;
h1{
    font-family: "Raleway";
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    margin: 0px;
    margin-bottom: 16px;
    color: #1d1f22;
}
h2 {
    font-family: "Raleway";
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
    margin: 0px;
    margin-bottom: 32px;
    color: #1d1f22;
}
button {
    width: 100%;
    padding: 16px 32px;
    min-height: 52px;
    background-color: #5ece7b;
    font-family: "Raleway";
    font-weight: 600;
    font-size: 16px;
    color: white;
    border: 0px;
    margin-bottom: 20px;
    box-sizing: border-box;
    text-align: center;
    &hover:{
        background: #3fa35a;
        cursor: pointer;
    }
    &active:{
        background: #3fa35a;
        color: #1d1f22;
    }
}
`;
const ItemAttr= styled.div`
display: flex;
flex-direction: column;
`;
const ItemPrice= styled.div`

h2{
    font-family: "Urbanist";
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    margin: 0px;
    margin-bottom: 10px;
    color: #1d1f22;
}
p{
    font-family: "Urbanist";
    font-weight: 700;
    font-size: 24px;
    line-height: 46px;
    margin: 0px;
    margin-bottom: 20px;
    color: #1d1f22;
}
`;
const NoStock= styled.div`
width: 100%;
    padding: 16px 32px;
    min-height: 52px;
    background-color: #5ece7b;
    font-family: "Urbanist";
    font-weight: 600;
    font-size: 16px;
    color: white;
    border: 0px;
    margin-bottom: 20px;
    box-sizing: border-box;
    text-align: center;
    opacity: 0.7;
    filter: brightness(0.8);
`;
const ItemDesc= styled.div`
font-family: "Roboto";
font-weight: 400;
font-size: 16px;
line-height: 26px;
color: #1d1f22;
`;
export class PItemInfo extends Component {
    render(){
        const {name, brand, attributes, description, addToBasket, id, price, inStock, chosenAttribute, chosenAttributes} = this.props;
        return (
            <Info>
                <h1>{brand}</h1>
                <h2>{name}</h2>
                <ItemAttr>
                {attributes?.map((attr, attrIdx) => {
                    return(
                        <PItemAttr 
                            key= {id + "attr" + attrIdx}
                            attribute={attr}
                            attrIdx={attrIdx}
                            chosenAttributes={chosenAttributes}
                            chosenAttribute={chosenAttribute}
                        />
                    );
                })}
                </ItemAttr>
                <ItemPrice>
                    <h2>PRICE: </h2>
                    <p>{price.currency.symbol + "" + price.amount}</p>
                </ItemPrice>
                {inStock ? ( <button onClick={addToBasket}>ADD TO CART</button>
                ) : (<NoStock>OUT OF STOCK</NoStock>
                )}
                <ItemDesc><JsxParser jsx={description} /></ItemDesc>
            </Info>
        )
    }
}

export default PItemInfo;