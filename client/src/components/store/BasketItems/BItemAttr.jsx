import React, { Component } from 'react';
import styled from 'styled-components';

const AttrName = styled.div`
font-family: "Urbanist";
font-weight: 700;
font-size: 14px;
line-height: 20px;
margin: 5px 0px;
color: #26282a;
text-transform:uppercase;
`;

const AttrOptions = styled.div.attrs(props => ({
    className: props.className,
}))`
display: flex;
flex-wrap: wrap;
margin-bottom: 16px;

& .basketItemAttr{
    text-transform: uppercase;
    min-width: 45px;
    height: 25px;
    border: 1px solid #26282a;
    box-sizing: border-box;
    font-family: "Urbanist";
    font-weight: 400;
    font-size: 14px;
    color: #26282a;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    margin-bottom: 5px;
    padding: 0px 5px;
}

& .chosenItemAttr{
    background-color: #26282a;
    color: white;
    box-shadow: rgba(0, 230, 64, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}
& .chosenItemAttrSwatch{
    box-shadow: rgba(0, 230, 64, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}
`;

export class BItemAttr extends Component { 

    render() {
        const { attrIdx, attribute, chosenAttributes } = this.props;
        // attributes are static in main basket
        const { id, type, name } = attribute;

        return(
            <div>
                <AttrName>{name}:</AttrName>
                
                <AttrOptions>
                    {attribute.items.map((itemAttr, itemIdx) => {
                        const { value, displayValue } = itemAttr;
                        let className = " basketItemAttr";
                        let style = {};

                        if (chosenAttributes[attrIdx] === itemIdx){
                            if (type === "swatch"){
                                className += " chosenItemAttrSwatch";
                            } else {
                                className += " chosenItemAttr";
                            }
                        }

                        if (type === "swatch" && value ==="#000"){
                            style = {
                                backgroundColor: value,
                                color: "white",
                            };
                        } else if (type === "swatch"){
                            style = {
                                backgroundColor: value,
                            };
                        }
                  

                        return (
                            <div
                            htmlFor = {value}
                            key={id + value}
                            className={className}
                            style={style}>

                            {displayValue}
                            </div>
                        );
                    })}
                </AttrOptions>
            </div>
        );
    }
}

export default BItemAttr;