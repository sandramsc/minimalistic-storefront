/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';
import TextAttr from './TextAttr';
import SwatchAttr from './SwatchAttr';

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
            min-width: 50px;
            height: 30px;
            border: 1px solid #26282a;
            box-sizing: border-box;
            font-family: "Urbanist";
            font-weight: 400;
            font-size: 16px;
            color: #26282a;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 6px;
            margin-bottom: 8px;
            padding: 0px 5px;

            &:hover{
                cursor: pointer;
                transform: scale(1.05);
            }
        }

        & .chosenAttribute{
            background-color: #26282a;
            color: white; 
            box-shadow: rgba(0, 230, 64, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
        }
        & .swatchActiveAttr{
            box-shadow: rgba(0, 230, 64, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
            border: 2px solid lime;
        }
`;

export class PItemAttr extends Component {
render(){
    const { attribute, chooseAttribute, chosenAttributes, attrIdx} = this.props;
    const {id, items, type, name} = attribute;
 
    return(
        <Attr key={id}>
            <h2>{name}: </h2>
            <AttrOptions>
            {items.map((item, itemIdx) => {
                const {displayValue, value} = item;
                const confirmed =
				Object.keys(chosenAttributes).length !== 0 &&
				chosenAttributes[attrIdx] === itemIdx;
                let choiceItem = null;
                
                if(type === 'text')
                choiceItem = <TextAttr text={value} confirmed={confirmed}
                    displayValue={displayValue} />

                else if (type === 'swatch')
                choiceItem = <SwatchAttr color={value} confirmed={confirmed} />;

                return (
                    <div
                    htmlFor={item.value}
                    key={item.id}
                    onClick={() => chooseAttribute(attrIdx, itemIdx)}>
                        
                    {choiceItem}
                    </div>
                );
            })}
            </AttrOptions>
        </Attr>
    );
}
}

export default PItemAttr;