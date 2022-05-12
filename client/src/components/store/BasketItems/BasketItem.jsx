import React, { Component } from "react";
import styled from 'styled-components';
import BItemAttribute from "./BItemAttribute";
import ItemQty from "./ItemQty";
import ItemImg from "./ItemImg";


const Container = styled.h3`
padding: 20px 0px;
border-top: 1px solid #e5e5e5;
display: flex;
justify-content: space-between;
`;

const Brand = styled.h3`
 text-decoration: none;
 margin: 0px 0px 16px 0px;
 font-weight: 600;
`;
const Name = styled.h4`
text-decoration: none;
margin: 0px 0px 16px 0px;
    font-weight: 400;
`;
const Price = styled.p`
text-decoration: none;
font-family: "Urbanist";
font-weight: 700;
font-size: 24px;
color: #1d1f22;
margin: 0px 0px 16px 0px;
margin: 0px;
`;
const Info = styled.div`
font-family: "Raleway";
font-size: 30px;
line-height: 30px;
color: #1d1f22;
`;
const ItemOptions = styled.div`
display: flex;
`;

export class BasketItem extends Component {

    render() {
        const { idx, item, price, plusQnty, minusQnty  } = this.props;
        const { product, qnty } = item;
        const { id, name, attributes, gallery, brand, chosenAttributes } = product;
        
        return(
            <Container key={item.product.id}>
                <Info>
                    <Brand>{brand}</Brand>
                    <Name>{name}</Name>
                    <Price>{price.currency.symbol + "" + price.amount}</Price>
                    <div className="smallCart">
                        {attributes.map((attribute,attrIdx) => {
                            return(
                                <BItemAttribute 
                                    key= {id + "attribute" + attrIdx}
                                    attribute={attribute}
                                    attrIdx={attrIdx}
                                    chosenAttributes={chosenAttributes}
                                />
                            );
                        })}
                    </div>
                </Info>
                <ItemOptions>
                <ItemQty 
                    idx={idx}
                    qnty={qnty}
                    plusQnty={plusQnty}
                    minusQnty={minusQnty}
                />
                <ItemImg gallery={gallery}  id={id}/>   
                </ItemOptions>
            </Container>
        );
    }
}

export default BasketItem;