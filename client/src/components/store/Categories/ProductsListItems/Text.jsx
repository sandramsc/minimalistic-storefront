import React, { Component } from 'react';
import './text.css';
import styled from 'styled-components';

const Attr = styled.div`
	display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

class Text extends Component {
	render() {
		const { text, checked } = this.props;
		return (
			<Attr id={checked ? 'SelectedText' : 'TextItem'}>{text}</Attr >
		);
	}
}

export default Text;