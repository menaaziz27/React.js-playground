import React from 'react';
import Modal from './modal/Modal';
import BackDrop from './modal/BackDrop';
import './modal/Modal.css';
import { useState } from 'react';

const getHref = () => {
	return window.location.pathname;
};

const FavouritesButton = props => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const showButton = getHref() === '/favourites' ? false : true;

	onClickHandler = e => {
		showModal();

		props.onClick(props.photo);
	};

	function showModal() {
		setModalIsOpen(true);
	}

	return (
		<div>
			{modalIsOpen && <Modal />}
			{showButton ? (
				<button onClick={this.onClickHandler}>To Favourites</button>
			) : (
				''
			)}
		</div>
	);
};

export default FavouritesButton;
