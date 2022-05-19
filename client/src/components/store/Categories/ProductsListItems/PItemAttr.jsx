/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';

const Attr = styled.div`
    margin: 0px 0px 5px 0px;
    display: inline-block;
    justify-content: flex-start;
        h2{
            font-family: "Urbanist";
            font-weight: 700 !important;
            font-size: 20px !important;
            line-height: 18px;
            margin: 0px;
            margin-bottom: 10px;
            color: #26282a;
            text-transform: uppercase;
        }
`;
const AttrOptions = styled.div.attrs(props => ({
    className: props.className,
}))`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;

        & .attrItem{
            text-transform: uppercase;
            min-width: 60px;
            height: 35px;
            border: 1px solid #26282a;
            box-sizing: border-box;
            font-family: "Urbanist";
            font-weight: 400;
            font-size: 16px;
            color: #26282a;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 8px;
            margin-bottom: 10px;
            padding: 0px 5px;

            &:hover{
                cursor: pointer;
                transform: scale(1.05);
            }
        }

        & .chosenAttribute{
            background-color: #26282a;
            color: white;
        }
        & .swatchChosenAttr{
            box-shadow: 5px 7px 4px -3px rgba(94,206,123,0.82);
        }
`;

export class PItemAttr extends Component {
render(){
    const {  attr, chosenAttribute, chosenAttributes, attrIdx} = this.props;
    const {id, items, type, name} = attr;
 
    return(
        <Attr key={id}>
            <h2>{name}: </h2>
            <AttrOptions>
            {items.map((item, itemIdx) => {
                const {displayValue, value} = item;
                let className = "attrItem";
                let style = {};

                // color swatches, a feature that allows users to choose between available colors of the same product
                // check to see if attr is a swatch inorder to style it based on that color
                if (type === "swatch"){
                    if (value === "#000"){
                        style = { backgroundColor: `${value}`, color: "white"};
                    } else {
                        style = { backgroundColor: `${value}`}
                    }
                }
                // checks to see if swatach is chosen inorder to change its style
                if (itemIdx === chosenAttributes[attrIdx]){
                    if(type === "swatch"){
                        className += " swatchChosenAttr";
                    } else {
                        className += " chosenAttribute";
                    }
                }
                return (
                    <div
                    key={item.id}
                    className={className}
                    onClick={()=> chosenAttribute(itemIdx, attrIdx)}
                    style={style}>
                    {displayValue}
                    </div>
                );
            })}
            </AttrOptions>
        </Attr>
    );
}
}

export default PItemAttr;