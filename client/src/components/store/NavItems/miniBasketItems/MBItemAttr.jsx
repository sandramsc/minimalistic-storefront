/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';

const MBAttr = styled.div.attrs(props => ({
  className: props.className,
}))`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0px;
  text-transform: uppercase;
  
    & .mbAttrItem {
        min-width: 23px;
        height: 20px;
        border: 1px solid #26282a;
        box-sizing: border-box;
        padding: 1px;
        font-family: "Urbanist";
        font-weight: 500;
        font-size: 12px;
        color: #26282a;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 4px;
        margin-bottom: 4px;
    }
    & .mbAttrChosenItem{
        background-color: #26282a;
        color: white;
    }
    & .swatchmbChosenAttrItem{
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }
`;
const Name = styled.div`
  font-family: "Urbanist";
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  margin: 5px 0px;
  color: #26282a;
`;

export class MBItemAttr extends Component {
  render() {
    const { attribute, chosenAttributes, attrIdx} = this.props;
    const { items, type, name} = attribute;
 
    return(
      <>
      <Name>{name}: </Name>
      <MBAttr>
        {items.map((item, itemIdx) => {
          const {id, value, displayValue} = item;

          let className = "mbAttrItem";
          let style = {};
          if (chosenAttributes[attrIdx] === itemIdx){
            if (type === "swatch"){
               className += " swatchmbChosenAttrItem";
            }else {
               className += " mbAttrChosenItem";
            }
          }

          if (type === "swatch" && value === "#000"){
            style = { backgroundColor: value, color: "white", };
          } else if (type === "swatch")
            { style = { backgroundColor: value, };
          }

          return (
            <div
            htmlFor={item.value}
            key={name + id}
            className={className}
            style={style}>
              
              {displayValue}
            </div>
          );
        })}
      </MBAttr>
      </>
    );
  }
}

export default MBItemAttr;