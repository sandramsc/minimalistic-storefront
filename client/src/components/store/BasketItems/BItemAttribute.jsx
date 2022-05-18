import React, { Component } from 'react';
import styled from 'styled-components';

const AttrName = styled.div`
font-family: "Urbanist";
font-weight: 700;
font-size: 16px;
line-height: 20px;
margin: 5px 0px;
color: #1d1f22;
text-transform:uppercase
`;

const ItemAttr = styled.div.attrs(props => ({
    className: props.className,
}))`
display: flex;
flex-wrap: wrap;
margin: 10px 0px;
& .chosenItemAttrSwatch {
    box-shadow: 1px 1px 5px 0px yellow;
  },
 & .chosenItemAttr {
    background-color: #1d1f22;
    color: white;
  },
  & .basketItemAttr {
    text-transform: uppercase;
    min-width: 60px;
    height: 35px;
    border: 1px solid #1d1f22;
    box-sizing: border-box;
    font-family: "Urbanist";
    font-weight: 400;
    font-size: 16px;
    color: #1d1f22;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
    padding: 0px 5px;
    &:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
  }
`

export class BItemAttribute extends Component { 

    render() {
        const { attrIdx, attribute, chosenAttributes } = this.props;
        const { id, type, name } = attribute;

        return(
            <>
                <AttrName>{ name + ":"}</AttrName>
                <ItemAttr>
                    {attribute.items.map((itemAttr, itemIdx) => {
                        const { value, displayValue } = itemAttr;
                        let className = "basketItemAttr";
                        let style = {};

                        if (chosenAttributes[attrIdx] === itemIdx){
                            if (type === "swatch"){
                                className += "chosenItemAttrSwatch";
                            } else {
                                className += "chosenItemAttr";
                            }
                        }

                        if (type === "swatch" && value ==="#000"){
                            style = {
                                backgroundColor: value,
                                color: "#fff",
                            };
                        } else if (type === "swatch"){
                            style = {
                                backgroundColor: value,
                            };
                        }

                        return (
                            <div key={id +"" + value} className={className} style={style}>
                                {displayValue}
                            </div>
                        )
                    })}
                </ItemAttr>
            </>
        )
    }
}

export default BItemAttribute;