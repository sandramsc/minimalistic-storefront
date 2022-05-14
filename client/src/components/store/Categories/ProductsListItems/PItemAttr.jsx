import React, { Component } from 'react';
import styled from 'styled-components';


const Attr = styled.div`
margin: 80px 0px 40px 0px;
display: flex;
justify-content: space-between;
`;
const AttrOptions = styled.div`
margin: 80px 0px 40px 0px;
display: flex;
justify-content: space-between;
`;



export class PItemAttr extends Component {
render(){
    const { attribute, chosenAttribute, chosenAttributes, attrIdx}=this.props;
    const {id, items, type, name} = attribute;

    return(
        <Attr key={id}>
            <h2>{name}: </h2>
            <AttrOptions>
            {items.map((item, itemIdx) => {
                const {showStatus, status} = item;
                let className = "attrItem";
                let design = {};

                // color swatches, a feature that allows users to choose between available colors of the same product
                // check to see if attr is a swatch inorder to design it based on that color
                if (type === "swatch"){
                    if (design === "#000"){
                        design = { bg: status, color: "#fff"};
                    } else {
                        design = { bg: status}
                    }
                }
                // chhecks to see if swtach is chosen inorder to change its design
                if (itemIdx === chosenAttributes[attrIdx]){
                    if(type === "swatch"){
                        className += " swatchChosenAttr";
                    }else {
                        className += " chosenAttr";
                    }
                }
                return (
                    <div key={item.id}
                    className={className}
                    onClick={()=> chosenAttribute(itemIdx, attrIdx)}
                    design={design}
                    >
                    {showStatus}
                    </div>
                )
            })}
            </AttrOptions>
        </Attr>
    );
}
}

export default PItemAttr;