import React, { Component } from "react";
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
  border: 1px solid #1d1f22;
  box-sizing: border-box;
  padding: 1px;
  font-family: "Urbanist";
  font-weight: 500;
  font-size: 12px;
  color: #1d1f22;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  margin-bottom: 4px;
  &:hover{
    cursor: pointer;
    transform: scale(1.06);
    border:1px solid #3fa35a;
}
}
& .mbAttrChosenItem{
  background-color: #1d1f22;
  color: white;
}
& .swatchmbChosenAttrItem{
    box-shadow: 2px 2px 5px 0px green;
}
`
const Name = styled.div`
font-family: "Urbanist";
font-weight: 700;
font-size: 16px;
line-height: 16px;
margin: 5px 0px;
color: #1d1f22;
`




export class MBItem extends Component {
  render() {
    const {  attr, chosenAttributes, attrIdx} = this.props;
    const { items, type, name} = attr;

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
          } else if (type === "swatch"){ style = { backgroundColor: value} }

          return (
            <div
            key={"attr: " + name + "item: " +id}
            className={className}
            style={style}>
              {displayValue}
            </div>
          )
        })}
      </MBAttr>
      </>
    );
  }
}

export default MBItem;