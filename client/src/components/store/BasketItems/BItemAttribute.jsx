import React, { Component } from "react";
import styled from 'styled-components';

const AttrName = styled.div`
font-family: "Roboto Condensed";
font-weight: 700;
font-size: 20px;
line-height: 20px;
margin: 5px 0px;
color: #1d1f22;
`;

const ItemAttr = styled.div`
display: flex;
flex-wrap: wrap;
margin: 10px 0px;
`;


export class BItemAttribute extends Component { 

    render() {
        const { attIdx, attribute, chosenAttributes } = this.props;
        const { id, type, name } = attribute;

        return(
            <>
                <AttrName>{ name + ":"}</AttrName>
                <ItemAttr>
                    {attribute.item.map((itemAttr, itemIdx) => {
                        const { status, showStatus } = itemAttr;
                        let className = "basketItemAttr";
                        let attr = {};

                        if (chosenAttributes[attIdx] === itemIdx){
                            if (type === "swatch"){
                                className += "chosenItemAttrSwatch";
                            } else {
                                className += "chosenItemAttr";
                            }
                        }

                        if (type === "swatch" && status ==="#000"){
                            attr = {
                                bg: status,
                                color: "#fff",
                            };
                        } else if (type === "swatch"){
                            attr = {
                                bg: status,
                            };
                        }

                        return (
                            <div key={id +"" + status} className={className} attr={attr}>
                                {showStatus}
                            </div>
                        )
                    })}
                </ItemAttr>
            </>
        )
    }
}

export default BItemAttribute;