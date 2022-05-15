import React, { Component } from 'react';
import styled from 'styled-components';

const AttrName = styled.div`
font-family: "Urbanist";
font-weight: 700;
font-size: 20px;
line-height: 20px;
margin: 5px 0px;
color: #1d1f22;
`;

const ItemAttr = styled.div.attrs(props => ({
    className: props.className,
}))`
display: "flex",
flex-wrap: "wrap",
margin: "10px 0px", 
.chosenItemAttrSwatch {
    box-shadow: 1px 1px 5px 0px black;
  },
  .chosenItemAttr {
    background-color: #1d1f22;
    color: white;
  },
  .basketItemAttr {
    min-width: 65px;
    height: 45px;
    border: 1px solid #1d1f22;
    box-sizing: border-box;
    padding: 2px;
    font-family: "Urbanist";
    font-weight: 400;
    font-size: 16px;
    color: #1d1f22;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
    margin-bottom: 4px;
  }

`

export class BItemAttribute extends Component { 

    render() {
        const { attrIdx, attr, chosenAttributes } = this.props;
        const { id, type, name } = attr;

        return(
            <>
                <AttrName>{ name + ":"}</AttrName>
                <ItemAttr>
                    {attr.item.map((itemAttr, itemIdx) => {
                        const { status, showStatus } = itemAttr;
                        let className = "basketItemAttr";
                        let style = {};

                        if (chosenAttributes[attrIdx] === itemIdx){
                            if (type === "swatch"){
                                className += "chosenItemAttrSwatch";
                            } else {
                                className += "chosenItemAttr";
                            }
                        }

                        if (type === "swatch" && status ==="#000"){
                            style = {
                                backgroundColor: status,
                                color: "#fff",
                            };
                        } else if (type === "swatch"){
                            style = {
                                backgroundColor: status,
                            };
                        }

                        return (
                            <div key={id +"" + status} className={className} style={style}>
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