import React, { Component } from 'react';
import './swatch.css';
import styled from 'styled-components';

const Attr = styled.div`
	display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

class Swatch extends Component {
	isDark = (hexColor) => {
		const rgb = parseInt(hexColor.substring(1), 16);
		const r = (rgb >> 16) & 0xff;
		const g = (rgb >> 8) & 0xff;
		const b = (rgb >> 0) & 0xff;
		const luminosity = 0.2126 * r + 0.7152 * g + 0.0722 * b;
		return luminosity < 40;
	};

	render() {
		const { color, text, checked } = this.props;
		return (



			
			<Attr id={checked ? 'SelectedSwatchItem' : 'SwatchItem'}
				style={{
					backgroundColor: color,
					color: this.isDark(color) ? 'white' : '#000',
				}}
			>{text}</Attr >
		);
	}
}

export default Swatch;