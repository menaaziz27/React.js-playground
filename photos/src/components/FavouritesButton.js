import React from 'react';

const getHref = () => {
	return window.location.pathname;
};

const FavouritesButton = props => {
	const showButton = getHref() === '/favourites' ? false : true;
	let button;
	if (showButton) {
		button = (
			<button onClick={() => props.onClick(props.photo)}>To Favourites</button>
		);
	} else {
		button = '';
	}
	return <div>{button}</div>;
};

export default FavouritesButton;
