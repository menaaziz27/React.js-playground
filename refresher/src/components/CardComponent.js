import React from 'react';

const CardComponent = props => {
	console.log(props, 'card props');
	return <div className="ui card">{props.children}</div>;
};

export default CardComponent;
