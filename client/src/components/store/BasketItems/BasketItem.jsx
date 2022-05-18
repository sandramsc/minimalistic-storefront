import React, { Component } from 'react';
import styled from 'styled-components';
import BItemAttribute from './BItemAttribute';
import  BItemQnty from './BItemQnty';
import BItemImg from './BItemImg';


const Container = styled.div`
padding: 18px 0px;
border-top: 1px solid #e5e5e5;
display: flex;
justify-content: space-between;
`;

const Info = styled.div`
font-family: "Urbanist";
font-size: 20px;
line-height: 28px;
color: #1d1f22;
h3{
    margin: 0px 0px 12px 0px;
  font-weight: 600;
}

h4 {
    margin: 0px 0px 10px 0px;
    font-weight: 400;
}
p {
    font-family: "Urbanist";
    font-weight: 700;
    font-size: 16px;
    color: #1d1f22;
    margin: 0px 0px 10px 0px;
    margin: 0px;
}
`;
const ItemOptions = styled.div`
display: flex;
`;

const MiniBasket= styled.h3`

`;

export class BasketItem extends Component {

    render() {
        const { idx, item, price, plusQnty, minusQnty  } = this.props;
        const { product, qnty } = item;
        const { id, name, attributes, gallery, brand, chosenAttributes } = product;
        
        return(
            <Container key={item.product.id}>
                <Info>
                    <h3>{brand}</h3>
                    <h4>{name}</h4>
                    <p>{price.currency.symbol + "" + price.amount}</p>
                    <MiniBasket>
                        {attributes.map((attr, attrIdx) => {
                            return(
                                <BItemAttribute 
                                    key= {id + "attr" + attrIdx}
                                    attribute={attr}
                                    attrIdx={attrIdx}
                                    chosenAttributes={chosenAttributes}
                                />
                            );
                        })}
                    </MiniBasket>
                </Info>
                <ItemOptions>
                <BItemQnty 
                    idx={idx}
                    qnty={qnty}
                    plusQnty={plusQnty}
                    minusQnty={minusQnty}
                />
                <BItemImg gallery={gallery}  id={id} />   
                </ItemOptions>
            </Container>
        );
    }
}

export default BasketItem;