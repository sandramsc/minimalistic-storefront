/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';

const AttrName = styled.div`
    font-family: "Urbanist";
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    margin: 5px 0px;
    color: #26282a;
    text-transform: uppercase;
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
        &:hover{
            cursor: pointer;
            transform: scale(1.06);
        }
    }
    & .chosenItemAttr{
        background-color: #26282a;
        color: white;
    }
    & .chosenItemAttrSwatch{
        box-shadow: 5px 7px 4px -3px rgba(94,206,123,0.82);
}`;

export class BItemAttribute extends Component { 

    render() {
        const { attrIdx, attr, chosenAttributes } = this.props;
        const { id, type, name } = attr;

        return(
            <div>
                <AttrName>{name}:</AttrName>
                <AttrOptions>
                    {attr.items.map((itemAttr, itemIdx) => {
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
                                backgroundColor: `${value}`,
                                color: "white",
                            };
                        } else if (type === "swatch"){
                            style = {
                                backgroundColor: `${value}`,
                            };
                        }
                  
                        return (
                            <div
                            key={id + "" + value}
                            className={className}
                            style={style}>
                            {displayValue}
                            </div>
                        );
                    })};
                </AttrOptions>
            </div>
        );
    }
}

export default BItemAttribute;