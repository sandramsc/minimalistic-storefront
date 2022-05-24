import React, { Component } from 'react';
import styled from 'styled-components';
import Text from '../../../components/store/Categories/ProductsListItems/Text';
import Swatch from '../../../components/store/Categories/ProductsListItems/Swatch';

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
                    const { value } = itemAttr;
                    const checked = Object.keys(chosenAttributes).length !== 0 &&
                        chosenAttributes[attrIdx] === itemIdx;
                        let choiceItem = null;
                
                    if(type === 'text') 
                        choiceItem = <Text text={value} checked={checked} />

                    else if (type === 'swatch')
                        choiceItem = <Swatch color={value} checked={checked}/>;

                        return (
                            <div key={id}>
                                
                            {choiceItem}
                            </div>
                        );
                })}
                </AttrOptions>
            </div>
        );
    }
}

export default BItemAttr;