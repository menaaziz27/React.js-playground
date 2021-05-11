import { useState } from 'react';
import Modal from './Modal';
import BackDrop from './BackDrop';

function Todo(props) {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function deleteHandler() {
		setModalIsOpen(true);
	}

	function closeModalHandler() {
		setModalIsOpen(false);
	}

	return (
		<div className="card">
			<h1>{props.text}</h1>
			{props.paragraph ? props.paragraph : ''}
			<div>
				<button className="btn" onClick={deleteHandler}>
					Delete
				</button>
			</div>
			{modalIsOpen && <Modal onCancel={closeModalHandler} />}
			{modalIsOpen && <BackDrop onCancel={closeModalHandler} />}
		</div>
	);
}

export default Todo;
