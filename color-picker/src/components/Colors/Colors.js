import React from 'react';
import Color from './Color/Color';

function Colors({ colors, copied, setCopied }) {
	const colorsCards = colors.map((color, index) => {
		return <Color color={color} key={index} copied={copied} setCopied={setCopied} />;
	});

	return <div className="grid md:grid-cols-3  sm:grid-cols-2 gap-4 mt-10">{colorsCards}</div>;
}

export default Colors;
