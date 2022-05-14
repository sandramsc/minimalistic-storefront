import React, { Component } from 'react';
import styled from 'styled-components';
import WithRouter from '../../../withRouter';
import { GET_PRODUCT } from '../../../../graphql/queries';
import client from '../../../../graphql/client';
import PItemImg from './PItemImg';
import PItemInfo from './PItemInfo';

const ItemDesc = styled.div`
margin: 80px 0px 40px 0px;
display: flex;
justify-content: space-between;
`;




export class ProductDecs extends Component {
    constructor (props) {
		super(props);
		this.state = {
			product: {},
			// chosen attr idx
			chosenAttributes: [],
			queried: false,
		};
	}
 // fetch product with param url
 componentDidMount() {
	client.query({ query: GET_PRODUCT, 
		variables: { id: this.props.params.productID },
	})
	.then((output) => {
		const product = output.data.product;
		const queried = true;
		let chosenAttributes = [];
		// the first item of each respective attribute is chosen
		if(product.attributes) {
			chosenAttributes = Array(product.attributes.length).fill(0);
		}
		this.setState({ product, chosenAttributes, queried })
	})
	.catch((error) => console.log(error));
 }
 // choose an attribute from the array
 chosenAttribute = (attrIdx, itemIdx) => {
	 let chosenAttributes = [...this.state.chosenAttributes];
	 chosenAttributes[attrIdx] = itemIdx;
	 this.setState((previous) => {
		 return { ...previous, chosenAttributes };
	 });
 };

 // add to basket, item with chosen attributes
 addToBasket = () => {
	 const chosenAttributes = this.state.chosenAttributes;
	 const item = {...this.state.product, chosenAttributes };
	 this.props.addToBasket(item)
 }
 render() {
	 if(!this.state.queried){
		 return "";
	 }

	 const {prices, description, inStock, id, name, brand, gallery } = this.state.product;
	 const { currentCurrency } = this.props;
	 let price = prices.find((due) => {
		 return due.currency.label === currentCurrency;
	 });
	 return (
		 <ItemDesc>
			<PItemImg gallery={gallery} name={name} />
			<PItemInfo id={id}
			price ={price}
			brand={brand}
			description={description}
			inStock={inStock}
			name={name}
			gallery={gallery}
			chosenAttributes={this.state.chosenAttributes}
			chosenAttribute={this.chosenAttribute}
			addToBasket={this.addToBasket }
			/>
		 </ItemDesc>
	 )
 }

}

export default WithRouter(ProductDecs);





